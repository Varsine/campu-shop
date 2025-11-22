
"use client";
import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.15s ease;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const IconBox = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: #666;
  margin: 0;
`;
