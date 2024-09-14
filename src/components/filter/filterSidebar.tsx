import { Slider } from "@nextui-org/slider";

const filterSidebar = ({
  sliderValue,
  handleSliderChange,
  handleSliderChangeEnd,
}: {
  handleSliderChange: Function;
  handleSliderChangeEnd: Function;
  sliderValue: [number,number];
}) => {
  return (
    <div className="w-60 rounded-lg border p-5 xs:hidden md:block max-h-[640px]">
      <Slider
        label="Price range"
        size="md"
        step={100}
        color="primary"
        marks={[
          {
            value: 0,
            label: "0",
          },
          {
            value: 10000,
            label: "10000",
          },
        ]}
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
        minValue={0}
        maxValue={10000}
        defaultValue={[100, 10000]}
        value={sliderValue}
        onChange={(value) => handleSliderChange(value)}
        onChangeEnd={(value) => handleSliderChangeEnd(value)}
        className="w-full"
      />
    </div>
  );
};

export default filterSidebar;
