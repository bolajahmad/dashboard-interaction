import styled from "styled-components";

export const DashboardStyleWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  & > .container {
    width: 100%;
    height: 100%;
    padding: 1em 5em;
    background-color: #dedede;

    & > .header {
      h1 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }

    & > .main__content {
      padding: 2em 0em;
      display: flex;
      align-items: stretch;
      justify-content: space-around;

      & > .chart__container {
        background: white;
        flex: 1em;
        padding: 2em 0em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        & > * + * {
          margin-top: 2em;
        }

        .chart {
          width: 100%;
          height: 450px;

          .chartjs-render-monitor {
            width: 100% !important;
            height: 100% !important;
          }
        }

        .show-as-box {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 1em 2em;
          padding-right: 4em;
          border: 1px solid #cecece;

          .color__container,
          .size__container {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: stretch;
            font-weight: 500;
            margin-left: 2em;
            justify-content: start;

            .color__box {
              height: 1em;
              width: 100%;
              margin: 1em 0em;
              background: linear-gradient(
                90deg,
                red 25%,
                blue 0,
                blue 50%,
                lightblue 0%,
                lightblue 75%,
                green 0%,
                green 100%
              );
            }
          }

          .size__container {
            .sizes__list {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            li {
              display: flex;
              align-items: center;
              justify-content: space-around;

              & > * + * {
                margin-left: 1em;
              }

              .circle {
                border-radius: 50%;
                width: 2em;
                height: 2em;
                background: #dedede;

                &.500 {
                  width: 3.5em;
                  height: 3.5em;
                }

                &.750 {
                  width: 4.5em;
                  height: 4.5em;
                }

                &.1000 {
                  width: 5.5em;
                  height: 5.5em;
                }

                &.1250 {
                  width: 6em;
                  height: 6em;
                }
              }
            }
          }
        }
      }

      & > .filter__container {
        background: white;
        padding: 2em;
        min-width: 300px;
        width: 30%;
        margin-left: 2em;

        & > * + * {
          margin-top: 2em;
        }
      }

      .filter__container .select__wrapper {
        width: 100%;

        & > * + * {
          margin-top: 2em;
        }

        label {
          display: block;
          font-weight: 700;
          color: #000;
          margin-bottom: 1em;
        }

        input,
        select {
          display: block;
          width: 100%;
          height: 3.5em;
          padding: 1em 2em;
          border: 1px solid #cecece;
        }
      }

      .filter__container .metrics__wrapper {
        .metrics__list {
          margin-top: 2em;

          & > * + * {
            margin-top: 1.5em;
          }

          & .list__item {
            display: flex;
            align-items: center;
            justify-content: start;
            padding: 1em 2em;
            background-color: #d9e0e7;
            font-weight: 700;
            font-size: 0.8rem;
            text-transform: uppercase;

            .dd-icon {
              margin-left: auto;
            }

            & > * + * {
              margin-left: 2em;
            }
          }
        }
      }
    }
  }
`;
