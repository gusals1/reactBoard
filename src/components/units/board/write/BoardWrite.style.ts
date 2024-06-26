import styled from "@emotion/styled";
import type { IRegisterButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  overflow: hidden;
  box-shadow: 0px 0px 10px gray;
  padding: 80px 102px;
`;

export const BoardTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
`;

export const Section = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
export const WriterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const HalfSection = styled.div`
  width: 47%;
`;

export const BoardLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
`;

export const BoardInput = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  outline: none;
  border: 1px solid #bdbdbd;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
  :focus {
    border: 2px solid lightblue;
  }
`;
export const BoardContents = styled.textarea`
  width: 100%;
  height: 480px;
  resize: none;
  padding: 16px;
  outline: none;
  border: 1px solid #bdbdbd;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
  :focus {
    border: 2px solid lightblue;
  }
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ZipCodeInput = styled.input`
  text-align: center;
  display: inline-block;
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  outline: none;
  cursor: auto;
  margin-right: 16px;
  ::placeholder {
    text-align: center;
  }
`;
export const ZipCodeButton = styled.button`
  width: 124px;
  height: 52px;
  padding: 16px;
  background: #000;
  color: #fff;
  border: none;
  font-weight: 500;
  cursor: pointer;
`;
export const Address = styled.input`
  width: 100%;
  margin-top: 14px;
  display: block;
  border: 1px solid #bdbdbd;
  height: 52px;
  text-indent: 16px;
  outline: none;
  cursor: auto;
  ::placeholder {
    font-size: 16px;
    color: #bdbdbd;
  }
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const RegistButton = styled.button`
  display: block;
  width: 180px;
  height: 52px;
  border: none;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 100px;
  cursor: ${(props: IRegisterButtonProps) =>
    props.isValid || props.isEdit ? "pointer" : ""};
  background-color: ${(props) =>
    props.isValid || props.isEdit ? "#FFD600" : "#ccc"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
