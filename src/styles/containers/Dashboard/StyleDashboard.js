import styled from "styled-components";

export const StylDashboard = styled.main`
  margin-top: 23px;
  margin-left: 24px;
  .dashboard {
    &-title {
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.5px;
      color: #8f9bb3;
    }
    &-items {
      display: flex;
      flex-wrap: wrap;
      &__item {
        width: 604px;
        max-height: 450px;
        height: 100%;
        background: #ffffff;
        border: 1px solid #edf1f7;
        border-radius: 4px;
      }
    }
  }
`;
