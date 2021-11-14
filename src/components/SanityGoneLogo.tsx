import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const SanityGoneLogo: React.VFC<React.HTMLAttributes<SVGElement>> = (props) => {
  return (
    <a href="/" css={styles}>
      <svg
        width="172"
        height="37"
        viewBox="0 0 172 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#filter0_d_2357_5563)">
          <path
            d="M6.47529 11.0868C6.47529 9.8923 6.94265 8.91498 7.87738 8.15483C8.81211 7.37918 9.89735 6.99135 11.1331 6.99135C11.4816 6.99135 11.8064 7.01462 12.1074 7.06116C12.4243 7.09218 12.6778 7.13097 12.8679 7.17751C13.0738 7.22405 13.359 7.30161 13.7234 7.4102C14.1036 7.50328 14.4363 7.58085 14.7215 7.6429C14.9116 8.4651 15.0067 9.57428 15.0067 10.9705C15.0067 11.0791 14.9275 11.1334 14.769 11.1334C14.3888 11.1334 14.1828 11.0558 14.1512 10.9007C14.0719 10.2181 13.7313 9.55877 13.1293 8.92273C12.5431 8.27118 11.8223 7.94541 10.9667 7.94541C10.0162 7.94541 9.34285 8.1781 8.94677 8.6435C8.56655 9.10889 8.37643 9.68288 8.37643 10.3655C8.37643 10.6602 8.43188 10.9472 8.54278 11.2264C8.65368 11.4902 8.76458 11.7151 8.87548 11.9013C8.98638 12.0719 9.18442 12.2736 9.46959 12.5063C9.7706 12.739 9.98448 12.9018 10.1112 12.9949C10.2538 13.088 10.5231 13.2587 10.9192 13.5069C11.3311 13.7551 11.5925 13.9102 11.7034 13.9723C11.7826 14.0188 12.0599 14.1894 12.5352 14.4842C13.0105 14.7634 13.3353 14.9651 13.5095 15.0892C13.6838 15.1978 13.9531 15.4072 14.3175 15.7175C14.6977 16.0122 14.9671 16.276 15.1255 16.5087C15.2998 16.7413 15.4582 17.0361 15.6008 17.3929C15.7592 17.7342 15.8384 18.091 15.8384 18.4633C15.8384 19.7044 15.3394 20.7282 14.3413 21.5349C13.359 22.3261 12.2025 22.7217 10.8717 22.7217C10.4915 22.7217 10.0875 22.6906 9.6597 22.6286C9.23195 22.582 8.87548 22.5355 8.59031 22.489C8.30514 22.4269 7.94075 22.3493 7.49715 22.2563C7.06939 22.1477 6.76838 22.0779 6.59411 22.0468C6.19804 20.1387 6 18.9054 6 18.347C6 18.2539 6.12674 18.2073 6.38023 18.2073C6.6654 18.2073 6.86344 18.2771 6.97434 18.4168C7.51299 20.6507 8.82795 21.7676 10.9192 21.7676C11.7114 21.7676 12.3847 21.5349 12.9392 21.0695C13.4937 20.6041 13.7709 19.9448 13.7709 19.0916C13.7709 18.7813 13.7234 18.4943 13.6283 18.2306C13.5333 17.9669 13.4303 17.7497 13.3194 17.5791C13.2243 17.4084 13.0422 17.23 12.7728 17.0439C12.5193 16.8422 12.3213 16.6948 12.1787 16.6017C12.0361 16.5087 11.7747 16.3613 11.3945 16.1596C11.0143 15.9579 10.7529 15.8183 10.6103 15.7408C10.1508 15.477 9.82605 15.2909 9.63594 15.1823C9.46167 15.0737 9.16065 14.8875 8.7329 14.6238C8.32098 14.3446 8.01997 14.1041 7.82985 13.9024C7.63974 13.6853 7.41794 13.4293 7.16445 13.1345C6.91097 12.8243 6.72877 12.4985 6.61787 12.1572C6.52281 11.8159 6.47529 11.4591 6.47529 11.0868Z"
            fill="#E8E8F2"
          />
          <path
            d="M25.3679 7.13097L30.1208 19.4174C30.4059 20.1465 30.6357 20.705 30.8099 21.0928C30.905 21.3255 31.1506 21.5194 31.5466 21.6745C31.9427 21.8141 32.2358 21.8839 32.4259 21.8839C32.4893 21.8839 32.521 22.0313 32.521 22.3261C32.521 22.3881 32.5051 22.4657 32.4734 22.5588C30.8892 22.4812 30.0178 22.4424 29.8594 22.4424C29.8435 22.4424 28.9246 22.4812 27.1027 22.5588C27.0393 22.4967 27.0076 22.3726 27.0076 22.1865C27.0235 21.9848 27.0631 21.8839 27.1265 21.8839C27.3166 21.8839 27.5542 21.8452 27.8394 21.7676C28.1246 21.69 28.2909 21.5892 28.3384 21.4651C28.3701 21.341 28.386 21.2169 28.386 21.0928C28.386 20.8911 28.3543 20.6584 28.2909 20.3947C28.2434 20.1155 28.1959 19.8983 28.1483 19.7431L27.0789 16.8577C27.0314 16.7956 26.9839 16.7646 26.9364 16.7646C26.3185 16.7181 25.7165 16.6948 25.1303 16.6948C24.3064 16.6948 23.3004 16.7336 22.1122 16.8112L21.9934 16.881L20.9715 19.4406C20.7022 20.2163 20.5675 20.7515 20.5675 21.0462C20.5675 21.2634 20.6309 21.4186 20.7576 21.5116C20.9002 21.6202 21.1299 21.7133 21.4468 21.7909C21.7637 21.8529 21.9934 21.8839 22.136 21.8839C22.1835 21.8839 22.2073 21.977 22.2073 22.1632C22.2231 22.3493 22.2152 22.4812 22.1835 22.5588C20.5992 22.4812 19.7833 22.4424 19.7358 22.4424C19.4189 22.4424 19.1417 22.4502 18.904 22.4657C18.6664 22.4812 18.397 22.4967 18.096 22.5122C17.8109 22.5277 17.5336 22.5433 17.2643 22.5588C17.2009 22.4967 17.1692 22.3804 17.1692 22.2097C17.1692 21.9925 17.2009 21.8839 17.2643 21.8839C17.4544 21.8839 17.7 21.8452 18.001 21.7676C18.302 21.69 18.5079 21.5814 18.6188 21.4418C18.9515 21.023 19.3239 20.2939 19.7358 19.2545L23.8708 8.85292C23.9024 8.77536 23.9421 8.65125 23.9896 8.48061C24.053 8.30996 24.1005 8.18586 24.1322 8.10829C24.1639 8.01521 24.2114 7.90662 24.2748 7.78252C24.3381 7.6429 24.3936 7.54206 24.4411 7.48001C24.4886 7.41796 24.5441 7.34815 24.6075 7.27058C24.6867 7.19302 24.7659 7.13872 24.8451 7.1077C24.9402 7.07667 25.0431 7.06116 25.154 7.06116L25.3679 7.13097ZM22.6113 15.5313C23.4351 15.5624 23.9975 15.5779 24.2985 15.5779C24.9956 15.5779 25.7165 15.5546 26.4611 15.5081L26.5324 15.3917L24.6075 10.2491L22.5637 15.4382C22.5637 15.5003 22.5796 15.5313 22.6113 15.5313Z"
            fill="#E8E8F2"
          />
          <path
            d="M46.0429 10.2956C46.0429 9.34934 45.9874 8.66677 45.8765 8.24791C45.829 8.12381 45.5517 8.00746 45.0448 7.89887C44.5536 7.77476 44.2051 7.71271 43.9991 7.71271C43.9358 7.71271 43.9041 7.62739 43.9041 7.45674C43.9041 7.27058 43.9358 7.14648 43.9991 7.08443C44.2051 7.09994 44.617 7.13097 45.2349 7.17751C45.8527 7.20853 46.3756 7.22405 46.8033 7.22405C47.2152 7.22405 47.7301 7.20078 48.348 7.15424C48.9817 7.1077 49.354 7.08443 49.4649 7.08443C49.4966 7.17751 49.5124 7.29385 49.5124 7.43347C49.5124 7.61963 49.4808 7.71271 49.4174 7.71271C49.259 7.71271 48.9104 7.77476 48.3718 7.89887C47.8489 8.02297 47.5717 8.13932 47.54 8.24791C47.4133 8.72882 47.3499 9.45018 47.3499 10.412V19.2545C47.3499 20.2163 47.3737 21.3022 47.4212 22.5122C47.3578 22.5743 47.2073 22.6053 46.9697 22.6053C46.7003 22.6053 46.4389 22.4269 46.1854 22.0701L36.9649 9.27178V19.2079C36.9649 20.2318 37.0203 20.9532 37.1312 21.372C37.1629 21.4806 37.4243 21.597 37.9155 21.7211C38.4224 21.8297 38.7551 21.8839 38.9136 21.8839C38.9611 21.8839 38.9849 21.977 38.9849 22.1632C39.0007 22.3493 38.9928 22.4812 38.9611 22.5588C37.3768 22.4812 36.4658 22.4424 36.2282 22.4424L33.4953 22.5588C33.4478 22.5122 33.424 22.3959 33.424 22.2097C33.424 21.9925 33.4478 21.8839 33.4953 21.8839C33.7171 21.8839 34.0736 21.8297 34.5647 21.7211C35.0717 21.597 35.3489 21.4651 35.3964 21.3255C35.5549 20.9221 35.6341 20.193 35.6341 19.1381V9.99314C35.6341 9.233 35.5786 8.65125 35.4677 8.24791C35.4202 8.12381 35.1509 8.01521 34.6598 7.92214C34.1686 7.81354 33.8122 7.75925 33.5904 7.75925C33.527 7.75925 33.4953 7.66617 33.4953 7.48001C33.4953 7.27834 33.527 7.14648 33.5904 7.08443C34.8261 7.11545 35.6341 7.13097 36.0143 7.13097C36.8382 7.13097 37.4719 7.11545 37.9155 7.08443C38.5017 8.13932 41.187 11.94 45.9716 18.4866C46.0191 18.2229 46.0429 17.9048 46.0429 17.5325V10.2956Z"
            fill="#E8E8F2"
          />
          <path
            d="M52.8395 10.3189C52.8395 9.3571 52.784 8.66677 52.6731 8.24791C52.6256 8.12381 52.3959 8.01521 51.9839 7.92214C51.5879 7.81354 51.2868 7.75925 51.0809 7.75925C51.0175 7.75925 50.9858 7.65841 50.9858 7.45674C50.9858 7.27058 51.0175 7.14648 51.0809 7.08443C52.9028 7.16199 53.8534 7.20078 53.9326 7.20078C54.1861 7.20078 55.105 7.16199 56.6893 7.08443C56.721 7.17751 56.7368 7.29385 56.7368 7.43347C56.7368 7.65066 56.7051 7.75925 56.6417 7.75925C56.4833 7.75925 56.1981 7.81354 55.7862 7.92214C55.3743 8.03073 55.1525 8.13932 55.1208 8.24791C54.9782 8.79087 54.9069 9.51223 54.9069 10.412V19.2545C54.9069 20.1542 54.9782 20.8756 55.1208 21.4186C55.1525 21.5271 55.3743 21.6357 55.7862 21.7443C56.1981 21.8374 56.4833 21.8839 56.6417 21.8839C56.7051 21.8839 56.7368 22.0003 56.7368 22.233C56.7368 22.3571 56.721 22.4657 56.6893 22.5588C55.105 22.4812 54.1861 22.4424 53.9326 22.4424C53.8534 22.4424 52.9028 22.4812 51.0809 22.5588C51.0175 22.4967 50.9858 22.3804 50.9858 22.2097C50.9858 21.9925 51.0175 21.8839 51.0809 21.8839C51.2868 21.8839 51.5879 21.8374 51.9839 21.7443C52.3959 21.6513 52.6256 21.5427 52.6731 21.4186C52.784 20.9997 52.8395 20.3094 52.8395 19.3476V10.3189Z"
            fill="#E8E8F2"
          />
          <path
            d="M62.9155 7.17751C64.0087 7.20853 64.9038 7.22405 65.6009 7.22405C66.298 7.22405 67.1931 7.20853 68.2863 7.17751C69.3794 7.14648 70.227 7.13097 70.829 7.13097C71.2251 7.13097 71.7717 7.04564 72.4688 6.875L72.9203 10.2026C72.8094 10.3112 72.6193 10.3655 72.3499 10.3655C72.2074 10.3655 72.1282 10.3267 72.1123 10.2491C71.8905 9.38037 71.6133 8.8219 71.2806 8.57369C70.9637 8.30996 70.3537 8.1781 69.4507 8.1781C67.7714 8.1781 66.9 8.29445 66.8366 8.52715C66.694 9.02357 66.6227 9.79922 66.6227 10.8541V19.2545C66.6227 20.1542 66.694 20.8756 66.8366 21.4186C66.8683 21.5271 67.0901 21.6357 67.502 21.7443C67.9139 21.8374 68.1991 21.8839 68.3575 21.8839C68.4209 21.8839 68.4526 22.0003 68.4526 22.233C68.4526 22.3571 68.4368 22.4657 68.4051 22.5588C66.8208 22.4812 65.9019 22.4424 65.6484 22.4424C65.5692 22.4424 64.6186 22.4812 62.7967 22.5588C62.7333 22.4967 62.7016 22.3804 62.7016 22.2097C62.7016 21.9925 62.7333 21.8839 62.7967 21.8839C63.0027 21.8839 63.3037 21.8374 63.6997 21.7443C64.1117 21.6513 64.3414 21.5427 64.3889 21.4186C64.4998 20.9997 64.5553 20.3094 64.5553 19.3476V10.9239C64.5553 9.57428 64.484 8.77536 64.3414 8.52715C64.2146 8.29445 63.3591 8.1781 61.7748 8.1781C60.8718 8.1781 60.2539 8.30996 59.9212 8.57369C59.6044 8.8219 59.335 9.38037 59.1132 10.2491C59.0974 10.3267 59.0182 10.3655 58.8756 10.3655C58.6063 10.3655 58.4161 10.3112 58.3052 10.2026L58.7568 6.875C59.4538 7.04564 60.0004 7.13097 60.3965 7.13097C60.9985 7.13097 61.8382 7.14648 62.9155 7.17751Z"
            fill="#E8E8F2"
          />
          <path
            d="M76.8414 7.22405C77.0315 7.22405 78.0771 7.17751 79.9783 7.08443C80.01 7.14648 80.0179 7.27058 80.0021 7.45674C80.0021 7.62739 79.9783 7.71271 79.9308 7.71271C79.6614 7.71271 79.3525 7.78252 79.004 7.92214C78.6713 8.04624 78.5049 8.24016 78.5049 8.50388C78.5049 8.67452 78.592 8.90722 78.7663 9.20197L81.4279 14.1351C81.5071 14.2127 81.5863 14.1972 81.6656 14.0886C83.8202 10.8929 84.8975 9.02357 84.8975 8.48061C84.8975 8.30996 84.7391 8.13932 84.4222 7.96868C84.1054 7.79803 83.7172 7.71271 83.2578 7.71271C83.1944 7.71271 83.1627 7.62739 83.1627 7.45674C83.1627 7.27058 83.1944 7.14648 83.2578 7.08443C85.0163 7.17751 85.9511 7.22405 86.062 7.22405C86.5531 7.22405 87.0601 7.20078 87.5829 7.15424C88.1057 7.1077 88.4384 7.08443 88.581 7.08443C88.6127 7.17751 88.6285 7.29385 88.6285 7.43347C88.6285 7.61963 88.5968 7.71271 88.5334 7.71271C88.3433 7.71271 88.0106 7.78252 87.5353 7.92214C87.0601 8.06175 86.7432 8.2324 86.5848 8.43407C85.9827 9.34934 85.1035 10.7378 83.9469 12.5993C82.8062 14.4609 82.2359 15.5003 82.2359 15.7175V19.2545C82.2359 20.2163 82.2993 20.9376 82.426 21.4186C82.4577 21.5271 82.6716 21.6435 83.0676 21.7676C83.4637 21.8762 83.7331 21.9305 83.8756 21.9305C83.939 21.9305 83.9707 22.0313 83.9707 22.233C83.9707 22.3571 83.9548 22.4657 83.9232 22.5588C82.3389 22.4812 81.4517 22.4424 81.2616 22.4424C81.214 22.4424 80.2793 22.4812 78.4574 22.5588C78.394 22.4967 78.3623 22.3881 78.3623 22.233C78.3623 22.0313 78.394 21.9305 78.4574 21.9305C78.6475 21.9305 78.9327 21.8762 79.3129 21.7676C79.709 21.659 79.9308 21.5427 79.9783 21.4186C80.105 20.9376 80.1684 20.193 80.1684 19.1847V16.276C80.1684 16.0588 79.9941 15.6322 79.6456 14.9961C79.3129 14.3446 78.3306 12.5838 76.6988 9.7139C76.4453 9.24851 76.2473 8.93049 76.1047 8.75984C75.978 8.57369 75.7879 8.39529 75.5344 8.22464C75.3601 8.10054 75.0987 7.98419 74.7501 7.8756C74.4016 7.767 74.1481 7.71271 73.9897 7.71271C73.9263 7.71271 73.8946 7.62739 73.8946 7.45674C73.8946 7.27058 73.9263 7.14648 73.9897 7.08443C74.2432 7.09994 74.6709 7.13097 75.273 7.17751C75.875 7.20853 76.3978 7.22405 76.8414 7.22405Z"
            fill="#E8E8F2"
          />
          <path
            d="M93.619 21.5814C93.619 22.233 93.5398 22.7915 93.3814 23.2569C93.2071 23.7688 92.914 24.2419 92.5021 24.6763C92.106 25.1107 91.504 25.6614 90.696 26.3285C90.6326 26.3595 90.5772 26.375 90.5296 26.375C90.4187 26.375 90.3078 26.2897 90.1969 26.119C90.086 25.9484 90.0306 25.8243 90.0306 25.7467C90.0306 25.7157 90.1732 25.5838 90.4584 25.3511C90.7594 25.1184 91.0525 24.7771 91.3376 24.3273C91.6228 23.8774 91.7654 23.3732 91.7654 22.8147C91.7654 22.3649 91.6545 21.9538 91.4327 21.5814C91.2267 21.1936 91.1237 20.9687 91.1237 20.9066C91.1237 20.5964 91.2901 20.3016 91.6228 20.0224C91.9713 19.7431 92.3595 19.6035 92.7872 19.6035C92.9298 19.6035 93.0724 19.6578 93.215 19.7664C93.4843 20.0146 93.619 20.6196 93.619 21.5814ZM91.3376 14.8565C91.0525 14.5773 90.9099 14.2437 90.9099 13.8559C90.9099 13.4681 91.0525 13.1423 91.3376 12.8786C91.6228 12.6149 91.9634 12.483 92.3595 12.483C92.7556 12.483 93.0883 12.6149 93.3576 12.8786C93.6269 13.1423 93.7616 13.4681 93.7616 13.8559C93.7616 14.2437 93.6269 14.5773 93.3576 14.8565C93.0883 15.1357 92.7556 15.2754 92.3595 15.2754C91.9634 15.2754 91.6228 15.1357 91.3376 14.8565Z"
            fill="#E8E8F2"
          />
          <path
            d="M98.5731 14.9961C98.5731 12.7933 99.3256 10.9084 100.831 9.34159C102.336 7.75925 104.181 6.96808 106.368 6.96808C107.493 6.96808 109.37 7.31712 112 8.01521C112.063 9.78371 112.095 10.7455 112.095 10.9007C112.095 11.1334 111.929 11.2497 111.596 11.2497C111.437 11.2497 111.334 11.2109 111.287 11.1334C110.859 9.00805 109.243 7.94541 106.439 7.94541C104.855 7.94541 103.532 8.60471 102.47 9.92333C101.409 11.2419 100.878 12.832 100.878 14.6936C100.878 16.4156 101.456 18.0057 102.613 19.4639C103.785 20.9066 105.251 21.628 107.009 21.628C108.404 21.628 109.433 21.4573 110.099 21.116C110.21 21.0695 110.265 20.9532 110.265 20.767L110.241 18.8589V18.696C110.241 17.6876 110.178 17.0206 110.051 16.6948C109.988 16.5397 109.726 16.4156 109.267 16.3225C108.823 16.2294 108.475 16.1829 108.221 16.1829C108.158 16.1829 108.126 16.0898 108.126 15.9036C108.126 15.702 108.158 15.5701 108.221 15.5081C110.249 15.5856 111.287 15.6244 111.334 15.6244C111.461 15.6244 112.317 15.5856 113.901 15.5081C113.933 15.6011 113.949 15.7097 113.949 15.8338C113.949 16.0665 113.917 16.1829 113.854 16.1829C113.758 16.1829 113.537 16.2372 113.188 16.3458C112.855 16.4388 112.618 16.5242 112.475 16.6017C112.317 16.7103 112.238 17.23 112.238 18.1608C112.238 18.4866 112.245 18.8434 112.261 19.2312C112.293 19.6035 112.309 19.8052 112.309 19.8362C112.309 20.1155 112.364 20.3869 112.475 20.6507C112.586 20.9144 112.642 21.0695 112.642 21.116C112.642 21.2402 112.443 21.3798 112.047 21.5349C112.016 21.5504 111.857 21.6125 111.572 21.7211C111.303 21.8141 111.129 21.8762 111.049 21.9072C110.97 21.9382 110.788 22.0003 110.503 22.0934C110.233 22.1709 110.012 22.2252 109.837 22.2563C109.679 22.2873 109.441 22.3338 109.124 22.3959C108.823 22.4579 108.53 22.4967 108.245 22.5122C107.976 22.5433 107.651 22.5665 107.271 22.582C106.906 22.6131 106.518 22.6286 106.106 22.6286C104.015 22.6286 102.233 21.8762 100.759 20.3714C99.3018 18.8666 98.5731 17.0749 98.5731 14.9961Z"
            fill="#E8E8F2"
          />
          <path
            d="M122.789 7.94541C121.284 7.94541 120.096 8.5892 119.224 9.87679C118.353 11.1644 117.917 12.6536 117.917 14.3446C117.917 15.5856 118.123 16.7569 118.535 17.8583C118.947 18.9597 119.589 19.8828 120.46 20.6274C121.331 21.3565 122.353 21.7211 123.526 21.7211C124.54 21.7211 125.427 21.403 126.187 20.767C126.948 20.1155 127.502 19.3165 127.851 18.3702C128.215 17.4084 128.397 16.3845 128.397 15.2986C128.397 14.0576 128.191 12.8941 127.779 11.8082C127.367 10.7067 126.726 9.79147 125.854 9.06235C124.983 8.31772 123.961 7.94541 122.789 7.94541ZM117.775 20.418C116.301 18.8822 115.565 17.0283 115.565 14.8565C115.565 12.6847 116.301 10.8308 117.775 9.29505C119.264 7.74374 121.054 6.96808 123.145 6.96808C125.237 6.96808 127.027 7.74374 128.516 9.29505C130.005 10.8308 130.75 12.6847 130.75 14.8565C130.75 17.0283 130.005 18.8822 128.516 20.418C127.027 21.9538 125.237 22.7217 123.145 22.7217C121.054 22.7217 119.264 21.9538 117.775 20.418Z"
            fill="#E8E8F2"
          />
          <path
            d="M144.913 10.2956C144.913 9.34934 144.858 8.66677 144.747 8.24791C144.7 8.12381 144.422 8.00746 143.915 7.89887C143.424 7.77476 143.076 7.71271 142.87 7.71271C142.806 7.71271 142.775 7.62739 142.775 7.45674C142.775 7.27058 142.806 7.14648 142.87 7.08443C143.076 7.09994 143.488 7.13097 144.105 7.17751C144.723 7.20853 145.246 7.22405 145.674 7.22405C146.086 7.22405 146.601 7.20078 147.219 7.15424C147.852 7.1077 148.225 7.08443 148.336 7.08443C148.367 7.17751 148.383 7.29385 148.383 7.43347C148.383 7.61963 148.351 7.71271 148.288 7.71271C148.13 7.71271 147.781 7.77476 147.242 7.89887C146.72 8.02297 146.442 8.13932 146.411 8.24791C146.284 8.72882 146.22 9.45018 146.22 10.412V19.2545C146.22 20.2163 146.244 21.3022 146.292 22.5122C146.228 22.5743 146.078 22.6053 145.84 22.6053C145.571 22.6053 145.31 22.4269 145.056 22.0701L135.835 9.27178V19.2079C135.835 20.2318 135.891 20.9532 136.002 21.372C136.034 21.4806 136.295 21.597 136.786 21.7211C137.293 21.8297 137.626 21.8839 137.784 21.8839C137.832 21.8839 137.855 21.977 137.855 22.1632C137.871 22.3493 137.863 22.4812 137.832 22.5588C136.247 22.4812 135.336 22.4424 135.099 22.4424L132.366 22.5588C132.318 22.5122 132.295 22.3959 132.295 22.2097C132.295 21.9925 132.318 21.8839 132.366 21.8839C132.588 21.8839 132.944 21.8297 133.435 21.7211C133.942 21.597 134.22 21.4651 134.267 21.3255C134.425 20.9221 134.505 20.193 134.505 19.1381V9.99314C134.505 9.233 134.449 8.65125 134.338 8.24791C134.291 8.12381 134.021 8.01521 133.53 7.92214C133.039 7.81354 132.683 7.75925 132.461 7.75925C132.398 7.75925 132.366 7.66617 132.366 7.48001C132.366 7.27834 132.398 7.14648 132.461 7.08443C133.697 7.11545 134.505 7.13097 134.885 7.13097C135.709 7.13097 136.342 7.11545 136.786 7.08443C137.372 8.13932 140.058 11.94 144.842 18.4866C144.89 18.2229 144.913 17.9048 144.913 17.5325V10.2956Z"
            fill="#E8E8F2"
          />
          <path
            d="M152.566 7.22405C153.279 7.22405 154.514 7.19302 156.273 7.13097C158.031 7.06891 159.354 7.03789 160.241 7.03789C160.305 7.48777 160.424 8.08502 160.598 8.82965C160.788 9.55877 160.899 10.0164 160.931 10.2026C160.851 10.2801 160.709 10.3189 160.503 10.3189C160.297 10.3189 160.186 10.2646 160.17 10.156C159.933 9.3028 159.6 8.75984 159.172 8.52715C158.744 8.27894 158.158 8.15483 157.413 8.15483H155.821C154.459 8.15483 153.762 8.25567 153.73 8.45734C153.651 8.82965 153.611 9.48121 153.611 10.412V14.1351C153.611 14.2282 153.952 14.2748 154.633 14.2748H155.893C156.336 14.2748 156.653 14.2748 156.843 14.2748C157.049 14.2748 157.263 14.2437 157.485 14.1817C157.707 14.1196 157.849 14.0808 157.913 14.0653C157.976 14.0498 158.055 13.949 158.15 13.7628C158.261 13.5767 158.324 13.4448 158.34 13.3672C158.356 13.2742 158.412 13.0492 158.507 12.6924C158.522 12.5838 158.641 12.5295 158.863 12.5295C159.053 12.5295 159.188 12.5683 159.267 12.6459V17.0439C159.204 17.1059 159.077 17.1369 158.887 17.1369C158.681 17.1369 158.554 17.0749 158.507 16.9508C158.396 16.5319 158.301 16.2217 158.221 16.02C158.142 15.8028 158.079 15.6787 158.031 15.6477C158 15.6011 157.936 15.5468 157.841 15.4848C157.635 15.3607 156.796 15.2986 155.322 15.2986C154.182 15.2986 153.611 15.3684 153.611 15.5081V19.1149C153.611 20.1232 153.682 20.8291 153.825 21.2324C153.873 21.3875 154.411 21.4651 155.441 21.4651H156.582C158.055 21.4651 159.053 21.3332 159.576 21.0695C159.814 20.9454 160.075 20.6739 160.36 20.2551C160.661 19.8207 160.899 19.3088 161.073 18.7193C161.105 18.6262 161.216 18.5797 161.406 18.5797C161.707 18.5797 161.905 18.6262 162 18.7193C161.921 18.9209 161.794 19.2467 161.62 19.6966C161.461 20.131 161.335 20.4878 161.24 20.767C161.144 21.0307 161.042 21.341 160.931 21.6978C160.82 22.0546 160.748 22.3493 160.717 22.582C159.909 22.582 158.633 22.5665 156.891 22.5355C155.148 22.5045 153.722 22.489 152.613 22.489L149.738 22.5588C149.69 22.5122 149.666 22.3881 149.666 22.1865C149.666 21.9848 149.69 21.8839 149.738 21.8839C149.944 21.8839 150.245 21.8297 150.641 21.7211C151.053 21.6125 151.298 21.4884 151.377 21.3487C151.488 21.1626 151.544 20.4335 151.544 19.1614V10.3655C151.544 9.45018 151.488 8.78311 151.377 8.36426C151.33 8.24016 151.092 8.12381 150.664 8.01521C150.253 7.90662 149.944 7.85233 149.738 7.85233C149.674 7.85233 149.643 7.75925 149.643 7.57309C149.643 7.37142 149.674 7.23956 149.738 7.17751C150.561 7.20853 151.504 7.22405 152.566 7.22405Z"
            fill="#E8E8F2"
          />
          <path
            d="M126.686 8.34099L127.345 8.71331L120.12 20.9658L119.462 20.5935L126.686 8.34099Z"
            fill="#E8E8F2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2357_5563"
            x="0"
            y="0.875"
            width="172"
            height="35.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2357_5563"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2357_5563"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </a>
  );
};
export default SanityGoneLogo;

const styles = (theme: Theme) => css`
  margin-top: 2px;
  line-height: 1;

  & > svg > path {
    fill: ${theme.palette.white.main};
  }
`;
