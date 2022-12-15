import Form from "react-bootstrap/Form";

export function Select({ options, value, setValue }: SelectProps) {
  return (
    <div>
      <Form.Select
        as="select"
        value={value}
        onChange={(e) => {
          setValue(+e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

type SelectProps = {
  options: number[];
  value: number;
  setValue: (itemsPerPageSelect: number) => void;
};
