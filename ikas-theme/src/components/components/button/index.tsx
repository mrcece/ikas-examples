import { Link } from "@ikas/storefront";
import React from "react";

import LoadingSVG from "src/components/svg/loading";

import * as S from "./style";

export type ButtonSize = "large" | "middle" | "small";
interface ButtonProps {
  /**
   * Default middle
   */
  size?: ButtonSize;
  stopPropagation?: boolean;
  anchor?: boolean;
  href?: string;
  type?: JSX.IntrinsicElements["button"]["type"];
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}

function Button(props: ButtonProps) {
  const onClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (props.stopPropagation) event.stopPropagation();
    props.onClick && props.onClick(event);
  };

  if (props.anchor && props.href) {
    return (
      <Link passHref href={props.href}>
        <S.AnchorButton
          $size={props.size || "middle"}
          title={props.title}
          onClick={onClick}
        >
          {props.loading && <Loading />}
          {props.children}
        </S.AnchorButton>
      </Link>
    );
  }

  return (
    <S.Button
      type={props.type}
      title={props.title}
      disabled={props.disabled}
      $block={!!props.block}
      $size={props.size || "middle"}
      onClick={onClick}
    >
      {props.loading && <Loading />}
      {props.children}
    </S.Button>
  );
}

export default Button;

export const Loading = () => (
  <S.Loading>
    <LoadingSVG />
  </S.Loading>
);
