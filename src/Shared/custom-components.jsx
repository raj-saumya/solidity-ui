import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  align-items: center;
  height: 100%;
`;

export const Input = styled.input`
  padding: 12px 16px;
  text-decoration: none;
  outline: none;
  width: 360px;
  font-size: 12px;
  border-radius: 4px;
  border: none;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  width: 360px;
  background: #1d282d;
  color: #faf9f9;
  border-radius: 4px;
  border: none;
  padding: 12px 16px;
  place-self: center;
  cursor: pointer;
`;

export const AlignStart = styled.div`
  align-self: self-start;
  padding-bottom: 8px;
`;

export const Header = styled.h1`
  font-size: 32px;
  color: #faf9f9;
  margin-bottom: 24px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: #faf9f9;
`;

export const FooterLabel = styled.label`
  font-size: 12px;
  color: #faf9f9;
  margin-top: auto;
`;

export const ActiveLink = styled(FooterLabel)`
  font-weight: bold;
  cursor: pointer;
  padding-left: 4px;
`;
