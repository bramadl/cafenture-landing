import Image from "next/image";
import { type FC } from "react";

export interface LogoProps {
  usePNG?: boolean;
  className?: string;
  type?: "dark" | "light";
}

export const Logo: FC<LogoProps> = ({
  className,
  type = "dark",
  usePNG = false,
}) => {
  switch (type) {
    case "dark":
      return <AlphaDark className={className} usePNG={usePNG} />;
    case "light":
      return <AlphaLight className={className} usePNG={usePNG} />;
  }
};

const AlphaDark = ({
  className,
  usePNG,
}: {
  className?: string;
  usePNG: boolean;
}) => {
  if (usePNG) {
    return (
      <Image
        alt="Cafenture Indonesia: Logo Dark"
        className={className}
        src="/logos/alpha-dark.png"
        height={100}
        width={100}
      />
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.3496 16.3535C36.7396 17.0703 32.4769 18.8367 28.8135 21.4008L31.0283 22.3279C33.9145 20.4989 37.1582 19.1832 40.631 18.5093L41.3496 16.3535Z"
        fill="url(#paint0_linear_467_27185)"
      />
      <path
        d="M60.7634 22.2023C57.9277 20.4386 54.7536 19.1677 51.3607 18.5093L50.6421 16.3535C55.1735 17.058 59.3693 18.7767 62.9902 21.2702L60.7634 22.2023Z"
        fill="url(#paint1_linear_467_27185)"
      />
      <path
        d="M22.3279 31.0283C20.4989 33.9145 19.1832 37.1582 18.5093 40.631L16.3535 41.3496C17.0703 36.7396 18.8367 32.4769 21.4008 28.8135L22.3279 31.0283Z"
        fill="url(#paint2_linear_467_27185)"
      />
      <path
        d="M16.3535 50.6422L18.5093 51.3607C19.1986 54.9131 20.5595 58.2257 22.4544 61.1612L21.5321 63.3645C18.897 59.6596 17.0825 55.3305 16.3535 50.6422Z"
        fill="url(#paint3_linear_467_27185)"
      />
      <path
        d="M29.266 70.9016C32.8262 73.2978 36.9282 74.9508 41.3496 75.6383L40.631 73.4825C37.3501 72.8458 34.2736 71.6363 31.5099 69.9623L29.266 70.9016Z"
        fill="url(#paint4_linear_467_27185)"
      />
      <path
        d="M51.3607 73.4825L50.6422 75.6383C54.984 74.9632 59.0179 73.357 62.5331 71.0302L60.2764 70.0856C57.566 71.6958 54.5606 72.8616 51.3607 73.4825Z"
        fill="url(#paint5_linear_467_27185)"
      />
      <path
        d="M73.4825 40.631C72.7719 36.9689 71.3476 33.5615 69.3602 30.5595L70.2759 28.3718C73.0104 32.1326 74.8925 36.5531 75.6383 41.3496L73.4825 40.631Z"
        fill="url(#paint6_linear_467_27185)"
      />
      <path
        d="M69.2315 61.6249C71.2861 58.5763 72.7566 55.1014 73.4825 51.3608L75.6383 50.6422C74.8805 55.5162 72.9493 60.002 70.1427 63.8017L69.2315 61.6249Z"
        fill="url(#paint7_linear_467_27185)"
      />
      <path
        d="M62.6112 28.8686L74.5 17M74.5 17L65.5 38.5M74.5 17L53 26M28.8888 28.8686L17 17M17 17L26 38.5M17 17L38.5 26M63.5 31C63.5 32.6569 62.1569 34 60.5 34C58.8431 34 57.5 32.6569 57.5 31C57.5 29.3431 58.8431 28 60.5 28C62.1569 28 63.5 29.3431 63.5 31ZM28 31C28 32.6569 29.3431 34 31 34C32.6569 34 34 32.6569 34 31C34 29.3431 32.6569 28 31 28C29.3431 28 28 29.3431 28 31Z"
        stroke="url(#paint8_linear_467_27185)"
      />
      <path
        d="M62.6112 63.6314L74.5 75.5M74.5 75.5L65.5 54M74.5 75.5L53 66.5M28.8888 63.6314L17 75.5M17 75.5L26 54M17 75.5L38.5 66.5M63.5 61.5C63.5 59.8431 62.1569 58.5 60.5 58.5C58.8431 58.5 57.5 59.8431 57.5 61.5C57.5 63.1569 58.8431 64.5 60.5 64.5C62.1569 64.5 63.5 63.1569 63.5 61.5ZM28 61.5C28 59.8431 29.3431 58.5 31 58.5C32.6569 58.5 34 59.8431 34 61.5C34 63.1569 32.6569 64.5 31 64.5C29.3431 64.5 28 63.1569 28 61.5Z"
        stroke="url(#paint9_linear_467_27185)"
      />
      <path
        d="M71.5 51.5L66 46L71.5 40.5M88 46H48M48 46L64.5 38M48 46L64.5 54"
        stroke="url(#paint10_linear_467_27185)"
      />
      <path
        d="M58 56L88 46L58 36L48 46L58 56Z"
        stroke="url(#paint11_linear_467_27185)"
        strokeWidth="2"
      />
      <path
        d="M20.5 51.5L26 46L20.5 40.5M4 46H44M44 46L27.5 38M44 46L27.5 54"
        stroke="url(#paint12_linear_467_27185)"
      />
      <path
        d="M34 56L4 46L34 36L44 46L34 56Z"
        stroke="url(#paint13_linear_467_27185)"
        strokeWidth="2"
      />
      <path
        d="M46 4V44M46 44L54 27.5M46 44L38 27.5"
        stroke="url(#paint14_linear_467_27185)"
      />
      <path
        d="M36 34L46 4L56 34L46 44L36 34Z"
        stroke="url(#paint15_linear_467_27185)"
        strokeWidth="2"
      />
      <path
        d="M46 88V48M46 48L54 64.5M46 48L38 64.5"
        stroke="url(#paint16_linear_467_27185)"
      />
      <path
        d="M36 58L46 88L56 58L46 48L36 58Z"
        stroke="url(#paint17_linear_467_27185)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_467_27185"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172554" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_467_27185"
          x1="27.5"
          y1="17"
          x2="27.5"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_467_27185"
          x1="27.5"
          y1="75.5"
          x2="27.5"
          y2="54.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_467_27185"
          x1="88"
          y1="46"
          x2="48"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_467_27185"
          x1="88"
          y1="46"
          x2="48"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_467_27185"
          x1="4"
          y1="46"
          x2="44"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_467_27185"
          x1="4"
          y1="46"
          x2="44"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_467_27185"
          x1="46"
          y1="4"
          x2="46"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_467_27185"
          x1="46"
          y1="4"
          x2="46"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_467_27185"
          x1="46"
          y1="88"
          x2="46"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_467_27185"
          x1="46"
          y1="88"
          x2="46"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const AlphaLight = ({
  className,
  usePNG,
}: {
  className?: string;
  usePNG: boolean;
}) => {
  if (usePNG) {
    return (
      <Image
        alt="Cafenture Indonesia: Logo Light"
        className={className}
        src="/logos/alpha-light.png"
        height={100}
        width={100}
      />
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.3496 16.3535C36.7396 17.0703 32.4769 18.8367 28.8135 21.4008L31.0283 22.3279C33.9145 20.4989 37.1582 19.1832 40.631 18.5093L41.3496 16.3535Z"
        fill="url(#paint0_linear_477_35443)"
      />
      <path
        d="M60.7634 22.2023C57.9277 20.4386 54.7536 19.1677 51.3607 18.5093L50.6421 16.3535C55.1735 17.058 59.3693 18.7767 62.9902 21.2702L60.7634 22.2023Z"
        fill="url(#paint1_linear_477_35443)"
      />
      <path
        d="M22.3279 31.0283C20.4989 33.9145 19.1832 37.1582 18.5093 40.631L16.3535 41.3496C17.0703 36.7396 18.8367 32.4769 21.4008 28.8135L22.3279 31.0283Z"
        fill="url(#paint2_linear_477_35443)"
      />
      <path
        d="M16.3535 50.6422L18.5093 51.3607C19.1986 54.9131 20.5595 58.2257 22.4544 61.1612L21.5321 63.3645C18.897 59.6596 17.0825 55.3305 16.3535 50.6422Z"
        fill="url(#paint3_linear_477_35443)"
      />
      <path
        d="M29.266 70.9016C32.8262 73.2978 36.9282 74.9508 41.3496 75.6383L40.631 73.4825C37.3501 72.8458 34.2736 71.6363 31.5099 69.9623L29.266 70.9016Z"
        fill="url(#paint4_linear_477_35443)"
      />
      <path
        d="M51.3607 73.4825L50.6422 75.6383C54.984 74.9632 59.0179 73.357 62.5331 71.0302L60.2764 70.0856C57.566 71.6958 54.5606 72.8616 51.3607 73.4825Z"
        fill="url(#paint5_linear_477_35443)"
      />
      <path
        d="M73.4825 40.631C72.7719 36.9689 71.3476 33.5615 69.3602 30.5595L70.2759 28.3718C73.0104 32.1326 74.8925 36.5531 75.6383 41.3496L73.4825 40.631Z"
        fill="url(#paint6_linear_477_35443)"
      />
      <path
        d="M69.2315 61.6249C71.2861 58.5763 72.7566 55.1014 73.4825 51.3608L75.6383 50.6422C74.8805 55.5162 72.9493 60.002 70.1427 63.8017L69.2315 61.6249Z"
        fill="url(#paint7_linear_477_35443)"
      />
      <path
        d="M62.6112 28.8686L74.5 17M74.5 17L65.5 38.5M74.5 17L53 26M28.8888 28.8686L17 17M17 17L26 38.5M17 17L38.5 26M63.5 31C63.5 32.6569 62.1569 34 60.5 34C58.8431 34 57.5 32.6569 57.5 31C57.5 29.3431 58.8431 28 60.5 28C62.1569 28 63.5 29.3431 63.5 31ZM28 31C28 32.6569 29.3431 34 31 34C32.6569 34 34 32.6569 34 31C34 29.3431 32.6569 28 31 28C29.3431 28 28 29.3431 28 31Z"
        stroke="url(#paint8_linear_477_35443)"
      />
      <path
        d="M62.6112 63.6314L74.5 75.5M74.5 75.5L65.5 54M74.5 75.5L53 66.5M28.8888 63.6314L17 75.5M17 75.5L26 54M17 75.5L38.5 66.5M63.5 61.5C63.5 59.8431 62.1569 58.5 60.5 58.5C58.8431 58.5 57.5 59.8431 57.5 61.5C57.5 63.1569 58.8431 64.5 60.5 64.5C62.1569 64.5 63.5 63.1569 63.5 61.5ZM28 61.5C28 59.8431 29.3431 58.5 31 58.5C32.6569 58.5 34 59.8431 34 61.5C34 63.1569 32.6569 64.5 31 64.5C29.3431 64.5 28 63.1569 28 61.5Z"
        stroke="url(#paint9_linear_477_35443)"
      />
      <path
        d="M71.5 51.5L66 46L71.5 40.5M88 46H48M48 46L64.5 38M48 46L64.5 54"
        stroke="url(#paint10_linear_477_35443)"
      />
      <path
        d="M58 56L88 46L58 36L48 46L58 56Z"
        stroke="url(#paint11_linear_477_35443)"
        strokeWidth="2"
      />
      <path
        d="M20.5 51.5L26 46L20.5 40.5M4 46H44M44 46L27.5 38M44 46L27.5 54"
        stroke="url(#paint12_linear_477_35443)"
      />
      <path
        d="M34 56L4 46L34 36L44 46L34 56Z"
        stroke="url(#paint13_linear_477_35443)"
        strokeWidth="2"
      />
      <path
        d="M46 4V44M46 44L54 27.5M46 44L38 27.5"
        stroke="url(#paint14_linear_477_35443)"
      />
      <path
        d="M36 34L46 4L56 34L46 44L36 34Z"
        stroke="url(#paint15_linear_477_35443)"
        strokeWidth="2"
      />
      <path
        d="M46 88V48M46 48L54 64.5M46 48L38 64.5"
        stroke="url(#paint16_linear_477_35443)"
      />
      <path
        d="M36 58L46 88L56 58L46 48L36 58Z"
        stroke="url(#paint17_linear_477_35443)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_477_35443"
          x1="45.9959"
          y1="16.3535"
          x2="45.9959"
          y2="75.6383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_477_35443"
          x1="27.5"
          y1="17"
          x2="27.5"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_477_35443"
          x1="27.5"
          y1="75.5"
          x2="27.5"
          y2="54.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_477_35443"
          x1="88"
          y1="46"
          x2="48"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8FAFC" />
          <stop offset="1" stopColor="#F1F5F9" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_477_35443"
          x1="88"
          y1="46"
          x2="48"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_477_35443"
          x1="4"
          y1="46"
          x2="44"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8FAFC" />
          <stop offset="1" stopColor="#F1F5F9" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_477_35443"
          x1="4"
          y1="46"
          x2="44"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_477_35443"
          x1="46"
          y1="4"
          x2="46"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_477_35443"
          x1="46"
          y1="4"
          x2="46"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_477_35443"
          x1="46"
          y1="88"
          x2="46"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_477_35443"
          x1="46"
          y1="88"
          x2="46"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
      </defs>
    </svg>
  );
};
