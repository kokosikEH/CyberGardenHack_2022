import React from 'react';

import '../App.css';
import { Link } from 'react-router-dom';

function MyNav() {
  return (

    <div className='back'>
      <div className="nav">

        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" draggable="false" display="false">

          <svg width="50%" viewBox="0 0 569 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" d="M13.219 65H0.979024V1.55H20.149L35.899 46.91H37.429L53.719 1.55H72.439V65H60.199V19.19H58.579L42.199 65H30.769L14.839 19.19H13.219V65ZM98.4919 65H85.8919V1.55H98.4919V65ZM133.047 65.9C127.047 65.9 121.707 64.25 117.027 60.95C112.407 57.65 109.347 53.24 107.847 47.72L120.087 45.65C121.947 48.65 123.807 50.87 125.667 52.31C127.527 53.69 130.047 54.38 133.227 54.38C135.867 54.38 138.057 53.81 139.797 52.67C141.537 51.47 142.407 49.82 142.407 47.72C142.407 45.44 141.417 43.7 139.437 42.5C137.517 41.24 134.517 39.98 130.437 38.72C126.417 37.4 123.087 36.11 120.447 34.85C117.867 33.59 115.617 31.67 113.697 29.09C111.837 26.51 110.907 23.15 110.907 19.01C110.907 15.23 111.837 11.96 113.697 9.2C115.557 6.38 118.077 4.25 121.257 2.81C124.497 1.37 128.067 0.649997 131.967 0.649997C137.667 0.649997 142.557 2.18 146.637 5.24C150.717 8.24 153.597 12.35 155.277 17.57L143.307 19.55C140.967 14.63 137.367 12.17 132.507 12.17C130.107 12.17 128.037 12.71 126.297 13.79C124.617 14.87 123.777 16.43 123.777 18.47C123.777 20.03 124.287 21.35 125.307 22.43C126.327 23.45 127.617 24.32 129.177 25.04C130.737 25.7 132.957 26.51 135.837 27.47C139.857 28.79 143.157 30.11 145.737 31.43C148.317 32.75 150.537 34.7 152.397 37.28C154.317 39.86 155.277 43.22 155.277 47.36C155.277 51.14 154.257 54.44 152.217 57.26C150.237 60.08 147.537 62.24 144.117 63.74C140.757 65.18 137.067 65.9 133.047 65.9ZM178.56 65H165.96V1.55H178.56V65ZM213.115 65.9C207.115 65.9 201.775 64.25 197.095 60.95C192.475 57.65 189.415 53.24 187.915 47.72L200.155 45.65C202.015 48.65 203.875 50.87 205.735 52.31C207.595 53.69 210.115 54.38 213.295 54.38C215.935 54.38 218.125 53.81 219.865 52.67C221.605 51.47 222.475 49.82 222.475 47.72C222.475 45.44 221.485 43.7 219.505 42.5C217.585 41.24 214.585 39.98 210.505 38.72C206.485 37.4 203.155 36.11 200.515 34.85C197.935 33.59 195.685 31.67 193.765 29.09C191.905 26.51 190.975 23.15 190.975 19.01C190.975 15.23 191.905 11.96 193.765 9.2C195.625 6.38 198.145 4.25 201.325 2.81C204.565 1.37 208.135 0.649997 212.035 0.649997C217.735 0.649997 222.625 2.18 226.705 5.24C230.785 8.24 233.665 12.35 235.345 17.57L223.375 19.55C221.035 14.63 217.435 12.17 212.575 12.17C210.175 12.17 208.105 12.71 206.365 13.79C204.685 14.87 203.845 16.43 203.845 18.47C203.845 20.03 204.355 21.35 205.375 22.43C206.395 23.45 207.685 24.32 209.245 25.04C210.805 25.7 213.025 26.51 215.905 27.47C219.925 28.79 223.225 30.11 225.805 31.43C228.385 32.75 230.605 34.7 232.465 37.28C234.385 39.86 235.345 43.22 235.345 47.36C235.345 51.14 234.325 54.44 232.285 57.26C230.305 60.08 227.605 62.24 224.185 63.74C220.825 65.18 217.135 65.9 213.115 65.9ZM245.129 65V1.55H257.279V23.78C258.839 21.68 260.819 20.03 263.219 18.83C265.619 17.57 268.109 16.94 270.689 16.94C274.049 16.94 277.109 17.81 279.869 19.55C282.629 21.23 284.789 23.6 286.349 26.66C287.969 29.66 288.779 33.02 288.779 36.74V65H276.629V38.36C276.629 35.24 275.729 32.69 273.929 30.71C272.129 28.73 269.819 27.74 266.999 27.74C264.059 27.74 261.689 28.73 259.889 30.71C258.149 32.63 257.279 35.18 257.279 38.36V65H245.129ZM316.892 65.9C313.592 65.9 310.562 65.06 307.802 63.38C305.102 61.64 302.972 59.27 301.412 56.27C299.852 53.21 299.072 49.82 299.072 46.1V17.84H311.222V44.48C311.222 47.6 312.092 50.15 313.832 52.13C315.632 54.11 317.912 55.1 320.672 55.1C323.492 55.1 325.772 54.14 327.512 52.22C329.252 50.24 330.122 47.66 330.122 44.48V17.84H342.272V65H332.822L330.752 57.98C329.252 60.38 327.242 62.3 324.722 63.74C322.262 65.18 319.652 65.9 316.892 65.9ZM353.399 65V17.84H362.849L364.919 24.77C366.479 22.37 368.489 20.48 370.949 19.1C373.469 17.66 376.139 16.94 378.959 16.94C382.319 16.94 385.379 17.81 388.139 19.55C390.899 21.23 393.059 23.6 394.619 26.66C396.239 29.66 397.049 33.02 397.049 36.74V65H384.899V38.36C384.899 35.24 383.999 32.69 382.199 30.71C380.399 28.73 378.089 27.74 375.269 27.74C372.329 27.74 369.959 28.73 368.159 30.71C366.419 32.63 365.549 35.18 365.549 38.36V65H353.399ZM436.876 54.56L435.796 65H426.436C421.036 65 416.956 63.77 414.196 61.31C411.436 58.79 410.056 55.16 410.056 50.42V28.28H402.766V17.84H410.056L412.846 4.34H422.206V17.84H435.796V28.28H422.206V50.42C422.206 53.18 423.616 54.56 426.436 54.56H436.876ZM490.555 40.7C490.555 41.84 490.495 43.13 490.375 44.57H453.295C453.895 47.81 455.335 50.39 457.615 52.31C459.895 54.17 462.775 55.1 466.255 55.1C468.655 55.1 470.785 54.65 472.645 53.75C474.505 52.85 475.975 51.62 477.055 50.06L488.485 51.95C486.925 56.39 484.015 59.84 479.755 62.3C475.495 64.7 470.755 65.9 465.535 65.9C460.795 65.9 456.535 64.85 452.755 62.75C449.035 60.65 446.125 57.74 444.025 54.02C441.925 50.3 440.875 46.1 440.875 41.42C440.875 36.74 441.925 32.54 444.025 28.82C446.185 25.1 449.155 22.19 452.935 20.09C456.715 17.99 460.975 16.94 465.715 16.94C470.455 16.94 474.715 17.99 478.495 20.09C482.275 22.19 485.215 25.07 487.315 28.73C489.475 32.33 490.555 36.32 490.555 40.7ZM465.715 27.11C462.895 27.11 460.435 27.92 458.335 29.54C456.235 31.1 454.765 33.2 453.925 35.84H477.325C476.485 33.26 475.015 31.16 472.915 29.54C470.875 27.92 468.475 27.11 465.715 27.11ZM498.155 65V17.84H507.605L509.495 24.41C511.175 21.77 513.095 20.03 515.255 19.19C517.415 18.29 520.025 17.84 523.085 17.84H524.795L525.875 29.45H518.855C515.975 29.45 513.815 30.08 512.375 31.34C510.995 32.6 510.305 34.64 510.305 37.46V65H498.155ZM547.783 65.9C542.263 65.9 537.673 64.58 534.013 61.94C530.413 59.3 528.133 55.67 527.173 51.05L538.423 49.16C539.143 51.14 540.343 52.73 542.023 53.93C543.763 55.13 545.923 55.73 548.503 55.73C550.543 55.73 552.283 55.4 553.723 54.74C555.223 54.02 555.973 52.97 555.973 51.59C555.973 50.15 555.163 49.01 553.543 48.17C551.923 47.33 549.673 46.61 546.793 46.01C541.753 44.93 537.673 43.34 534.553 41.24C531.493 39.14 529.963 35.81 529.963 31.25C529.963 26.51 531.733 22.94 535.273 20.54C538.873 18.14 543.283 16.94 548.503 16.94C553.363 16.94 557.533 18.2 561.013 20.72C564.553 23.24 566.953 26.69 568.213 31.07L556.963 32.96C556.243 31.1 555.133 29.66 553.633 28.64C552.193 27.62 550.483 27.11 548.503 27.11C546.763 27.11 545.263 27.5 544.003 28.28C542.743 29 542.113 29.96 542.113 31.16C542.113 32.6 542.983 33.74 544.723 34.58C546.463 35.42 548.983 36.23 552.283 37.01C556.903 38.09 560.683 39.65 563.623 41.69C566.623 43.73 568.123 46.88 568.123 51.14C568.123 53.78 567.403 56.24 565.963 58.52C564.583 60.74 562.363 62.54 559.303 63.92C556.243 65.24 552.403 65.9 547.783 65.9Z" fill="#133626" />
          </svg>

        </a>
        <br />
        <a className='right'>
          <Link to='/' ><a > Главная&nbsp;&nbsp;&nbsp;</a></Link>

          <Link to='/account'><a > Аккаунт&nbsp;&nbsp;&nbsp;</a></Link>
          <Link to='/about'><a> О разработчиках&nbsp;&nbsp;&nbsp;</a></Link>
        </a>

      </div>
    </div>

  );
}

export default MyNav;

