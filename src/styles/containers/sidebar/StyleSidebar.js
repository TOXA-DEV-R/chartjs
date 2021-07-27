import styled from "styled-components";

export const StyleSidebar = styled.aside`
  width: 296px;
  background: aliceblue;
  .sidebar {
    &-brand {
      width: 100%;
      border: 1px solid #edf1f7;
      background: #fff;
      &__column {
        width: 100%;
        padding: 0 19px;
        display: flex;
        justify-content: space-between;
      }
      &__left {
        display: flex;
      }
      &__btn {
        margin-top: 24px;
        border: none;
        background: none;
        margin-right: 19px;
        cursor: pointer;
        outline: none;
        display: inline-flex;
        .ic {
          width: 24px;
          height: 24px;
          background: #8f9bb3;
        }
      }
      &__logo {
        display: inline-flex;
        margin-top: 31.44px;
      }
      &__right {
        margin-top: 26px;
        span {
          display: inline-flex;
          position: relative;
          cursor: pointer;
          .ic {
            width: 24px;
            height: 24px;
            background: #8f9bb3;
          }
          &::after {
            content: "";
            position: absolute;
            top: 4px;
            right: 4px;
            width: 6px;
            height: 6px;
            background: #ff3d71;
            border-radius: 50%;
          }
        }
      }
      .administrator {
        width: 100%;
        margin-top: 31.24px;
        margin-bottom: 28px;
        &__column {
          display: flex;
          align-items: center;
          padding: 0 24px;
          &_image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &-name {
            margin-left: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.25px;
            color: #222b45;
            span {
              font-family: "Open Sans", sans-serif;
              font-weight: normal;
              font-size: 12px;
              line-height: 16px;
              text-align: right;
              color: #8f9bb3;
            }
          }
          &-down {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }
    &-links {
      list-style: none;
      background: #fff;
      border: 1px solid #edf1f7;
      border-top: none;
      li {
        padding-top: 21px;
        padding-bottom: 19px;
        padding-left: 18.5px;
        border-bottom: 1px solid #edf1f7;
        background: white;
        transition: all 250ms ease-in-out;
        position: relative;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          top: 2px;
          left: 0;
          width: 0;
          height: 100%;
          background: #3366ff;
          border-radius: 0 3px 0 0;
          transition: all 250ms ease-in-out;
        }
        a {
          display: flex;
          align-items: center;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.25px;
          color: #222b45;
          transition: all 250ms ease-in-out;
          span {
            margin-right: 18.5px;
            display: inline-flex;
            .ic {
              width: 15px;
              height: 15px;
              background: #8f9bb3;
              transition: all 250ms ease-in-out;
            }
          }
        }
        &:hover {
          background: #eff3ff;
          &::after {
            width: 4px;
          }
          a {
            color: #3366ff;
            span {
              .ic {
                background: #3366ff;
              }
            }
          }
        }
      }
    }
  }
`;
