import { area, scaleLinear } from "d3";
import { useEffect } from "react";
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import {
  Canvas,
  Circle,
  Group,
  Path,
  Skia,
  Text,
  useFont,
} from "@shopify/react-native-skia";

type Props = {
  size: number;
  value: number;
};

const WaveProgressIndicator = ({ size, value }: Props) => {
  const radius = size * 0.5;
  const circleThickness = radius * 0.05;
  const circleFillGap = 0.05 * radius;
  const fillCircleMargin = circleThickness + circleFillGap;
  const fillCircleRadius = radius - fillCircleMargin;

  const minValue = 0;
  const maxValue = 100;
  const fillPercent = Math.max(minValue, Math.min(maxValue, value)) / maxValue;

  const waveCount = 1;
  const waveClipCount = waveCount + 1;
  const waveLength = (fillCircleRadius * 2) / waveCount;
  const waveClipWidth = waveLength * waveClipCount;
  const waveHeight = fillCircleRadius * 0.1;

  const fontSize = radius / 2;
  const font = useFont(require("../assets/fonts/Roboto-Bold.ttf"), fontSize);

  if (!font) {
    console.error("Font failed to load");
    return null;
  }

  const textWidth = font.getTextWidth(`${value}`) ?? 0;
  const textTranslateX = radius - textWidth * 0.5;
  const textTransform = [{ translateY: size * 0.5 - fontSize * 0.7 }];

  const data: Array<[number, number]> = [];
  for (let i = 0; i <= 40 * waveClipCount; i++) {
    data.push([i / (40 * waveClipCount), i / 40]);
  }

  const waveScaleX = scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
  const waveScaleY = scaleLinear().range([0, waveHeight]).domain([0, 1]);

  const clipArea = area()
    .x((d) => waveScaleX(d[0]))
    .y0((d) => waveScaleY(Math.sin(d[1] * 2 * Math.PI)))
    .y1(() => fillCircleRadius * 2 + waveHeight);

  const clipSvgPath = clipArea(data) ?? "";

  const translateXAnimated = useSharedValue(0);
  const translateYPercent = useSharedValue(0);
  const textValue = useSharedValue(0);

  useEffect(() => {
    textValue.value = withTiming(value, { duration: 1000 });
  }, [value]);

  const text = useDerivedValue(
    () => `${textValue.value.toFixed(0)}`,
    [textValue]
  );

  useEffect(() => {
    translateYPercent.value = withTiming(fillPercent, { duration: 1000 });
  }, [fillPercent]);

  useEffect(() => {
    translateXAnimated.value = withRepeat(
      withTiming(1, { duration: 9000, easing: Easing.linear }),
      -1
    );
  }, []);

  const clipPath = useDerivedValue(() => {
    const clipP = Skia.Path.MakeFromSVGString(clipSvgPath);
    if (!clipP) {
      console.error("Failed to create path from SVG string");
      return null;
    }

    const transformMatrix = Skia.Matrix();
    transformMatrix.translate(
      fillCircleMargin - waveLength * translateXAnimated.value,
      fillCircleMargin +
        (1 - translateYPercent.value) * fillCircleRadius * 2 -
        waveHeight
    );
    clipP.transform(transformMatrix);
    return clipP;
  }, [translateXAnimated, translateYPercent]);

  const clipPathValue = clipPath.value as any;

  return (
    <Canvas style={{ width: size, height: size }}>
      <Circle
        cx={radius}
        cy={radius}
        r={radius - circleThickness * 0.5}
        color="#178BCA"
        style="stroke"
        strokeWidth={circleThickness}
      />
      <Text
        x={textTranslateX}
        y={fontSize}
        text={text}
        font={font}
        color="#045681"
        transform={textTransform}
      />
      {clipPathValue && (
        <Group clip={clipPathValue}>
          <Circle
            cx={radius}
            cy={radius}
            r={fillCircleRadius}
            color="#178BCA"
          />
          <Text
            x={textTranslateX}
            y={fontSize}
            text={text}
            font={font}
            color="#A4DBf8"
            transform={textTransform}
          />
        </Group>
      )}
    </Canvas>
  );
};

export default WaveProgressIndicator;
