import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef as myRef } from "react";

interface Props {
  onSearch: (searchtext: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = myRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
