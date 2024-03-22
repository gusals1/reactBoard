import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  overflow: hidden;
  box-shadow: 0px 0px 10px gray;
`

export const Main = styled.main`
  width: 100%;
  padding: 80px 102px;
`

export const BoardTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
`

export const FormSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
`
export const WriterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const FormSectionHalf = styled.div`
  width: 47%;
  display: inline-block;
`

export const BoardLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`
export const BoardInput = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  outline: none;
  border: 1px solid #BDBDBD;
  ::placeholder{
    font-weight: 400;
    font-size: 16px;
    color: #BDBDBD;
  }
  :focus{
    border: 2px solid lightblue;
  }
`
export const BoardContents = styled.textarea`
  width: 100%;
  height: 480px;
  resize: none;
  padding:16px;
  outline: none;
  border: 1px solid #BDBDBD;
  ::placeholder{
    font-weight: 400;
    font-size: 16px;
    color: #BDBDBD;
  }
  :focus{
    border: 2px solid lightblue;
  }
`

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const ZipCodeInput = styled.input`
  text-align: center;
  display: inline-block;
  width: 77px;
  height: 52px;
  border: 1px solid #BDBDBD;
  margin-right: 16px;
  ::placeholder{
    text-align: center;
  }
`
export const ZipCodeButton = styled.button`
  width: 124px;
  height: 52px;
  padding: 16px;
  background: #000;
  color: #fff;
  border: none;
  font-weight: 500;
  cursor: pointer;
`
export const Address = styled.input`
  width: 100%;
  margin-top: 14px;
  display: block;
  border: 1px solid #BDBDBD;
  height: 52px;
`

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background: #BDBDBD;
  border: none;
  margin-right: 24px;
  font-size: 24px;
  color: #4F4F4F;
  cursor: pointer;
`

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
  background: #FFD600;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 100px;
  cursor: pointer;
`

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;