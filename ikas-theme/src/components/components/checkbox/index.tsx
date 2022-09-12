import React from "react";
import * as S from "./style";

type Props = {
  checked?: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
};

function Checkbox(props: Props) {
  return (
    <S.Wrapper>
      <S.HiddenCheckbox
        type="checkbox"
        className="visually-hidden"
        checked={!!props.checked}
        onChange={(event) =>
          props.onChange && props.onChange(!!event.target.checked)
        }
      />
      <S.CustomCheckboxInnerWrapper $mr={!!props.children}>
        <S.CustomCheckbox>{!!props.checked && <CheckSVG />}</S.CustomCheckbox>
      </S.CustomCheckboxInnerWrapper>
      {!!props.children && props.children}
    </S.Wrapper>
  );
}

export default Checkbox;

const CheckSVG = () => (
  <svg
    width="10"
    height="8"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4.42857L4.36842 7L9 1"
      stroke="#22252A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
