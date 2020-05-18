/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import upflowLogo from './upflow.svg';
import heroImg from './hero-img.png';
import heroPicPngSmall from './hero-pic-small.png';
import heroPicPngLarge from './hero-pic-large.png';
import heroPicWebpSmall from './hero-pic-small.webp';
import heroPicWebpLarge from './hero-pic-large.webp';
// import adikteev from './customer-logo-grey-adikteev@2x.webp';
// import iziwork from './customer-logo-grey-iziwork@2x.webp';
// import reech from './customer-logo-grey-reech@2x.webp';
// import side from './customer-logo-grey-side@2x.webp';
// import triplebyte from './customer-logo-grey-triplebyte@2x.webp';
// import trusk from './customer-logo-grey-trusk@2x.webp';

const headerStyle = css`
  background: white;
  position: fixed;
  z-index: 2;
  left: 0px;
  right: 0px;
  top: 0px;
  box-shadow: rgba(11, 37, 75, 0.08) 0px 1px 0px 0px;

  > * {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const navStyle = css`
  a {
    text-decoration: none;
    margin-right: 48px;
    transition: color 200ms;

    &:first-child {
      border-bottom: 1px solid rgb(38, 127, 253);
      padding-bottom: 8px;
    }

    &:not(:last-child) {
      color: #0b254b;
      &:hover {
        color: rgb(38, 127, 253);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const mainStyle = css`
  padding-top: 120px;
`;

const sectionStyle = css`
  padding: 0px 40px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  position: relative;
`;

const heroSectionStyle = css`
  position: relative;
  overflow: hidden;
  height: 812px;

  > div {
    display: flex;

    > *:first-child {
      width: 600px;
      margin-right: 40px;
    }

    > *:last-child {
      flex: 1 1 0%;
      position: relative;
    }
  }

  picture {
    width: 1056px;
    position: absolute;

    img {
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    margin: 0;
    margin-bottom: 26px;
    padding-top: 120px;
    line-height: 66px;
    font-size: 52px;
    font-weight: 600;
  }

  p {
    color: rgba(11, 37, 75, 0.7);
    font-size: 20px;
    line-height: 30px;
    margin: 0px 0px 24px;
  }
`;

const heroBackgroundStyle = css`
  position: absolute;
  background-image: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgb(244, 248, 255) 100%
  );
  z-index: -1;
  top: 0px;
  bottom: 105px;
  left: -260px;
  right: -260px;
  height: 800px;
  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
`;

const buttonStyle = ({ size, color } = { color: 'default' }) => css`
  border-radius: 4px;
  padding: ${size === 'large' ? '20px 30px' : '0 12px'};
  height: ${size === 'large' ? '48px' : '38px'};
  line-height: ${size === 'large' ? '48px' : '38px'};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  background: ${{
    primary: 'rgb(38, 127, 253)',
    default: 'rgba(38, 127, 253, 0.08)',
    ghost: '#fff',
  }[color]};

  color: ${{
    primary: '#fff',
    default: 'rgb(38, 127, 253)',
    ghost: 'rgb(38, 127, 253)',
  }[color]};

  transition: all 0.3s;

  &:hover {
    box-shadow: ${{
      primary:
        'rgb(31, 105, 209) 0px 0px 0px 1px, rgba(11, 37, 75, 0.08) 0px 5px 7px -2px',
      default:
        'rgb(31, 105, 209) 0px 0px 0px 1px, rgba(11, 37, 75, 0.08) 0px 5px 7px -2px',
      ghost: 'rgba(38, 127, 253, 0.08) 0px 0px 0px 1px',
    }[color]};

    background: ${{
      primary: 'rgb(31, 105, 209)',
      default: 'rgb(31, 105, 209)',
      ghost: 'rgba(38, 127, 253, 0.08)',
    }[color]};

    color: ${{
      primary: ' rgb(255, 255, 255)',
      default: ' rgb(255, 255, 255)',
      ghost: 'rgb(38, 127, 253)',
    }[color]};
  }
`;

const arrowLinkStyle = css``;

function App() {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
            /* font-size: 14px; */
            letter-spacing: 0.2px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
              Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
              Segoe UI Symbol;
            color: #0b254b;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />

      <header css={headerStyle}>
        <div css={sectionStyle}>
          <img src={upflowLogo} alt="Upflow Logo" />
          <nav css={navStyle}>
            <a href="#a">Explore demo now</a>
            <a href="#a">Features</a>
            <a href="#a">Pricing</a>
            <a href="#a">Blog</a>
            <a href="#a">Login</a>
            <a href="#a" css={buttonStyle()}>
              Create a free account
            </a>
          </nav>
        </div>
      </header>

      <main css={mainStyle}>
        <section css={heroSectionStyle}>
          <div css={sectionStyle}>
            <div>
              <h1>Put an end to unpaid invoices.</h1>
              <p>
                Manage your invoices, from sending to payment. With Upflow,
                you'll collect 100% of your turnover.
              </p>

              <div>
                <a
                  href="#a"
                  css={css`
                    ${buttonStyle({ size: 'large', color: 'primary' })}
                    margin-right: 15px;
                  `}
                >
                  Create a free account
                </a>
                <a
                  href="#a"
                  css={buttonStyle({ size: 'large', color: 'ghost' })}
                >
                  Book a demo
                </a>
              </div>
            </div>

            <div>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${heroPicWebpSmall} 1056w, ${heroPicWebpLarge} 1586w`}
                />
                <source
                  srcSet={`${heroPicPngSmall} 1056w, ${heroPicPngLarge} 1586w`}
                />
                <img src={heroImg} alt="" />
              </picture>
            </div>
          </div>

          <div css={heroBackgroundStyle} />
        </section>

        {/* <section css={sectionStyle}>
          <h2>They trust Upflow</h2>
          <img src={adikteev} alt="logo" />
          <img src={iziwork} alt="logo" />
          <img src={reech} alt="logo" />
          <img src={side} alt="logo" />
          <img src={triplebyte} alt="logo" />
          <img src={trusk} alt="logo" />
        </section> */}

        <section css={sectionStyle}>
          <h2>Understand your cash flow</h2>
          <p>
            Make better business decisions through a deep, real-time view of
            your accounts receivable
          </p>

          <ul>
            <li>Dashboards</li>
            <li>Financial projections</li>
            <li>Days sales outstanding</li>
          </ul>

          <a href="#a" css={arrowLinkStyle}>
            Learn about insights
          </a>
        </section>

        <section css={sectionStyle}>
          <h2>Systematic collection</h2>
          <p>
            Never forget to follow up on an unpaid invoice by setting up
            systematic collection schedules
          </p>

          <ul>
            <li>Keep clients happy using personalised reminders</li>
            <li>Send emails and registered letters</li>
            <li>Keep the right stakeholders in the loop</li>
          </ul>

          <a href="#a" css={arrowLinkStyle}>
            Apply industry best practices
          </a>
        </section>

        <section css={sectionStyle}>
          <h2>Streamlined payments</h2>
          <p>
            Offer new payment methods that better suit your customer's needs and
            reduce your time to get paid
          </p>

          <ul>
            <li>Simplified payment experience for your customers</li>
            <li>Offer new payment methods</li>
            <li>Automatic reconciliation</li>
          </ul>

          <a href="#a" css={arrowLinkStyle}>
            Discover our payment platform
          </a>
        </section>

        <section css={sectionStyle}>
          <h2>Connect to your existing tools</h2>
          <p>
            Upflow seamlessly integrates with the way you work today. Keep your
            existing invoicing and accounting tools and leverage the power of
            Upflow within a few minutes.
          </p>
          <a href="#a" css={arrowLinkStyle}>
            Discover our API
          </a>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
