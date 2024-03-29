import {ChangeDetectorRef, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnChanges{
    @Input() icon: string;
    @ViewChild('iconContainer') container: ElementRef;
    selectedSvg: SafeHtml;

    icons: any = {
        daySunny: '<svg width="225" height="220" viewBox="0 0 225 220" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Clear, Moment=Day">\n' +
            '<g id="Light" filter="url(#filter0_f_303_719)">\n' +
            '<rect x="77" y="77" width="70.0885" height="66" rx="33" fill="#FFEF9A"/>\n' +
            '</g>\n' +
            '<g id="Sun" filter="url(#filter1_i_303_719)">\n' +
            '<path d="M143 110C143 127.258 129.141 141.248 112.044 141.248C94.9477 141.248 81.0884 127.258 81.0884 110C81.0884 92.7423 94.9477 78.7522 112.044 78.7522C129.141 78.7522 143 92.7423 143 110Z" fill="url(#paint0_linear_303_719)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_f_303_719" x="0" y="0" width="224.089" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur_303_719"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_719" x="81.0884" y="78.7522" width="61.9115" height="67.4956" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="5"/>\n' +
            '<feGaussianBlur stdDeviation="9"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_719"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_719" x1="107.342" y1="127.008" x2="133.175" y2="82.1253" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        dayPartlycloudy: '<svg width="225" height="221" viewBox="0 0 225 221" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Few clouds, Moment=Day">\n' +
            '<g id="Cloud" filter="url(#filter0_i_303_720)">\n' +
            '<path d="M153.918 91.1872C154.025 90.5872 154.08 89.97 154.08 89.34C154.08 83.4468 149.241 78.6694 143.272 78.6694C138.834 78.6694 135.021 81.3097 133.357 85.0859C132.008 83.9365 130.258 83.2425 128.346 83.2425C124.083 83.2425 120.626 86.6929 120.626 90.9491C120.626 91.1861 120.637 91.4206 120.658 91.6521C118.607 92.6438 117.195 94.7247 117.195 97.1312C117.195 100.499 119.96 103.229 123.371 103.229H152.536C155.947 103.229 158.712 100.499 158.712 97.1312C158.712 94.233 156.664 91.807 153.918 91.1872Z" fill="url(#paint0_linear_303_720)"/>\n' +
            '</g>\n' +
            '<g id="Light" filter="url(#filter1_f_303_720)">\n' +
            '<rect x="77.4322" y="77.5" width="70.1694" height="66.0762" rx="33.0381" fill="#FFEF9A"/>\n' +
            '</g>\n' +
            '<g id="Sun" filter="url(#filter2_i_303_720)">\n' +
            '<path d="M143.508 110.538C143.508 127.816 129.633 141.822 112.517 141.822C95.4008 141.822 81.5255 127.816 81.5255 110.538C81.5255 93.2604 95.4008 79.2542 112.517 79.2542C129.633 79.2542 143.508 93.2604 143.508 110.538Z" fill="url(#paint1_linear_303_720)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter3_i_303_720)">\n' +
            '<path d="M104.957 128.849C105.113 127.97 105.194 127.065 105.194 126.141C105.194 117.503 98.0844 110.5 89.3141 110.5C82.794 110.5 77.1917 114.37 74.7461 119.906C72.7648 118.221 70.1938 117.203 67.3843 117.203C61.1198 117.203 56.0413 122.261 56.0413 128.5C56.0413 128.847 56.0571 129.191 56.0879 129.531C53.0748 130.984 51 134.035 51 137.562C51 142.498 55.0627 146.5 60.0744 146.5H102.926C107.937 146.5 112 142.498 112 137.562C112 133.314 108.991 129.758 104.957 128.849Z" fill="url(#paint2_linear_303_720)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_i_303_720" x="117.195" y="78.6694" width="41.5169" height="34.5593" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_720"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_f_303_720" x="0.43219" y="0.5" width="224.169" height="220.076" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur_303_720"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_720" x="81.5255" y="79.2542" width="61.983" height="67.5676" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="5"/>\n' +
            '<feGaussianBlur stdDeviation="9"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_720"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_i_303_720" x="51" y="110.5" width="61" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_720"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_720" x1="119.836" y1="101.036" x2="161.613" y2="69.6838" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_720" x1="107.809" y1="127.566" x2="133.672" y2="82.6311" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_720" x1="54.8799" y1="143.286" x2="116.159" y2="97.1906" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#E3E3E1"/>\n' +
            '<stop offset="1" stop-color="#FCFCFC"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        dayCloudy: '<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Cloudy, Moment=Day">\n' +
            '<g id="Cloud" filter="url(#filter0_i_303_721)">\n' +
            '<path d="M46.3259 41.0872C46.3629 40.8674 46.3822 40.6412 46.3822 40.4103C46.3822 38.2507 44.6922 36.5 42.6074 36.5C41.0576 36.5 39.7259 37.4676 39.1446 38.8514C38.6736 38.4302 38.0625 38.1759 37.3946 38.1759C35.9055 38.1759 34.6983 39.4403 34.6983 41C34.6983 41.0869 34.7021 41.1728 34.7094 41.2576C33.9932 41.6211 33.5 42.3836 33.5 43.2655C33.5 44.4996 34.4657 45.5 35.657 45.5H45.843C47.0343 45.5 48 44.4996 48 43.2655C48 42.2034 47.2847 41.3144 46.3259 41.0872Z" fill="url(#paint0_linear_303_721)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter1_i_303_721)">\n' +
            '<path d="M81.3799 65.3781C81.5485 64.4253 81.6364 63.4452 81.6364 62.4448C81.6364 53.0865 73.9438 45.5 64.4545 45.5C57.4001 45.5 51.3386 49.6928 48.6925 55.6894C46.5488 53.8641 43.7671 52.7621 40.7273 52.7621C33.9492 52.7621 28.4545 58.2412 28.4545 65C28.4545 65.3764 28.4716 65.7488 28.5049 66.1165C25.2448 67.6913 23 70.9957 23 74.8172C23 80.1649 27.3957 84.5 32.8182 84.5H79.1818C84.6043 84.5 89 80.1649 89 74.8172C89 70.2148 85.7441 66.3624 81.3799 65.3781Z" fill="url(#paint1_linear_303_721)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_3" filter="url(#filter2_i_303_721)">\n' +
            '<path d="M91.5909 40.5138C91.5909 41.1935 91.5323 41.8595 91.4199 42.5069C94.3294 43.1757 96.5 45.7934 96.5 48.9207C96.5 52.5543 93.5695 55.5 89.9545 55.5H80.1317C77.4424 49.6047 71.4345 45.5 64.4545 45.5C59.8664 45.5 55.6983 47.2736 52.6166 50.1635C52.5401 49.761 52.5 49.3456 52.5 48.9207C52.5 46.324 53.9965 44.0787 56.17 43.0086C56.1477 42.7588 56.1364 42.5057 56.1364 42.25C56.1364 37.6575 59.7995 33.9345 64.3182 33.9345C66.3447 33.9345 68.1992 34.6833 69.6283 35.9236C71.3924 31.8489 75.4334 29 80.1364 29C86.4625 29 91.5909 34.1549 91.5909 40.5138Z" fill="url(#paint2_linear_303_721)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_i_303_721" x="33.5" y="36.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_721"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_721" x="23" y="45.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_721"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_721" x="52.5" y="29" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_721"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_721" x1="34.4223" y1="44.6964" x2="49.5118" y2="33.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_721" x1="27.1979" y1="81.0179" x2="93.5604" y2="31.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_721" x1="93.7014" y1="53.1339" x2="48.8549" y2="20.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        dayRain: '<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Rain, Moment=Day">\n' +
            '<g id="Cloud" filter="url(#filter0_i_303_722)">\n' +
            '<path d="M46.8259 41.0872C46.8629 40.8674 46.8822 40.6412 46.8822 40.4103C46.8822 38.2507 45.1922 36.5 43.1074 36.5C41.5576 36.5 40.2259 37.4676 39.6446 38.8514C39.1736 38.4302 38.5625 38.1759 37.8946 38.1759C36.4055 38.1759 35.1983 39.4403 35.1983 41C35.1983 41.0869 35.2021 41.1728 35.2094 41.2576C34.4932 41.6211 34 42.3836 34 43.2655C34 44.4996 34.9657 45.5 36.157 45.5H46.343C47.5343 45.5 48.5 44.4996 48.5 43.2655C48.5 42.2034 47.7847 41.3144 46.8259 41.0872Z" fill="url(#paint0_linear_303_722)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter1_i_303_722)">\n' +
            '<path d="M81.8799 65.3781C82.0485 64.4253 82.1364 63.4452 82.1364 62.4448C82.1364 53.0865 74.4438 45.5 64.9545 45.5C57.9001 45.5 51.8386 49.6928 49.1925 55.6894C47.0488 53.8641 44.2671 52.7621 41.2273 52.7621C34.4492 52.7621 28.9545 58.2412 28.9545 65C28.9545 65.3764 28.9716 65.7488 29.0049 66.1165C25.7448 67.6913 23.5 70.9957 23.5 74.8172C23.5 80.1649 27.8957 84.5 33.3182 84.5H79.6818C85.1043 84.5 89.5 80.1649 89.5 74.8172C89.5 70.2148 86.2441 66.3624 81.8799 65.3781Z" fill="url(#paint1_linear_303_722)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_3" filter="url(#filter2_i_303_722)">\n' +
            '<path d="M92.0909 40.5138C92.0909 41.1935 92.0323 41.8595 91.9199 42.5069C94.8294 43.1757 97 45.7934 97 48.9207C97 52.5543 94.0695 55.5 90.4545 55.5H80.6317C77.9424 49.6047 71.9345 45.5 64.9545 45.5C60.3664 45.5 56.1983 47.2736 53.1166 50.1635C53.0401 49.761 53 49.3456 53 48.9207C53 46.324 54.4965 44.0787 56.67 43.0086C56.6477 42.7588 56.6364 42.5057 56.6364 42.25C56.6364 37.6575 60.2995 33.9345 64.8182 33.9345C66.8447 33.9345 68.6992 34.6833 70.1283 35.9236C71.8924 31.8489 75.9334 29 80.6364 29C86.9625 29 92.0909 34.1549 92.0909 40.5138Z" fill="url(#paint2_linear_303_722)"/>\n' +
            '</g>\n' +
            '<g id="Drop" filter="url(#filter3_i_303_722)">\n' +
            '<path d="M41.0913 88.7354C38.5295 92.0959 34.943 98.8169 41.0913 98.8169C47.2397 98.8169 43.6531 92.0959 41.0913 88.7354Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Drop_2" filter="url(#filter4_i_303_722)">\n' +
            '<path d="M55.4934 93.6733C52.9316 97.0339 49.3451 103.755 55.4934 103.755C61.6418 103.755 58.0552 97.0339 55.4934 93.6733Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Drop_3" filter="url(#filter5_i_303_722)">\n' +
            '<path d="M68.867 88.7354C66.3052 92.0959 62.7187 98.8169 68.867 98.8169C75.0153 98.8169 71.4288 92.0959 68.867 88.7354Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_i_303_722" x="34" y="36.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_722"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_722" x="23.5" y="45.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_722"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_722" x="53" y="29" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_722"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_i_303_722" x="37.6965" y="88.7354" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_722"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_i_303_722" x="52.0986" y="93.6733" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_722"/>\n' +
            '</filter>\n' +
            '<filter id="filter5_i_303_722" x="65.4722" y="88.7354" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_722"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_722" x1="34.9223" y1="44.6964" x2="50.0118" y2="33.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_722" x1="27.6979" y1="81.0179" x2="94.0604" y2="31.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_722" x1="94.2014" y1="53.1339" x2="49.3549" y2="20.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        dayThunderstorms: '<svg width="204" height="167" viewBox="0 0 204 167" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Storm, Moment=Day">\n' +
            '<g id="Cloud" filter="url(#filter0_i_303_723)">\n' +
            '<path d="M92.8259 41.0872C92.8629 40.8674 92.8822 40.6412 92.8822 40.4103C92.8822 38.2507 91.1922 36.5 89.1074 36.5C87.5576 36.5 86.2259 37.4676 85.6446 38.8514C85.1736 38.4302 84.5625 38.1759 83.8946 38.1759C82.4055 38.1759 81.1983 39.4403 81.1983 41C81.1983 41.0869 81.2021 41.1728 81.2094 41.2576C80.4932 41.6211 80 42.3836 80 43.2655C80 44.4996 80.9657 45.5 82.157 45.5H92.343C93.5343 45.5 94.5 44.4996 94.5 43.2655C94.5 42.2034 93.7847 41.3144 92.8259 41.0872Z" fill="url(#paint0_linear_303_723)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter1_i_303_723)">\n' +
            '<path d="M127.88 65.3781C128.048 64.4253 128.136 63.4452 128.136 62.4448C128.136 53.0865 120.444 45.5 110.955 45.5C103.9 45.5 97.8386 49.6928 95.1925 55.6894C93.0488 53.8641 90.2671 52.7621 87.2273 52.7621C80.4492 52.7621 74.9545 58.2412 74.9545 65C74.9545 65.3764 74.9716 65.7488 75.0049 66.1165C71.7448 67.6913 69.5 70.9957 69.5 74.8172C69.5 80.1649 73.8957 84.5 79.3182 84.5H125.682C131.104 84.5 135.5 80.1649 135.5 74.8172C135.5 70.2148 132.244 66.3624 127.88 65.3781Z" fill="url(#paint1_linear_303_723)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_3" filter="url(#filter2_i_303_723)">\n' +
            '<path d="M138.091 40.5138C138.091 41.1935 138.032 41.8595 137.92 42.5069C140.829 43.1757 143 45.7934 143 48.9207C143 52.5543 140.07 55.5 136.455 55.5H126.632C123.942 49.6047 117.935 45.5 110.955 45.5C106.366 45.5 102.198 47.2736 99.1166 50.1635C99.0401 49.761 99 49.3456 99 48.9207C99 46.324 100.497 44.0787 102.67 43.0086C102.648 42.7588 102.636 42.5057 102.636 42.25C102.636 37.6575 106.299 33.9345 110.818 33.9345C112.845 33.9345 114.699 34.6833 116.128 35.9236C117.892 31.8489 121.933 29 126.636 29C132.963 29 138.091 34.1549 138.091 40.5138Z" fill="url(#paint2_linear_303_723)"/>\n' +
            '</g>\n' +
            '<g id="Drop" filter="url(#filter3_i_303_723)">\n' +
            '<path d="M91.4934 95.5C88.9316 98.8605 85.3451 105.582 91.4934 105.582C97.6418 105.582 94.0552 98.8605 91.4934 95.5Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Drop_2" filter="url(#filter4_i_303_723)">\n' +
            '<path d="M98.8948 87.5C96.333 90.8605 92.7465 97.5815 98.8948 97.5815C105.043 97.5815 101.457 90.8605 98.8948 87.5Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Drop_3" filter="url(#filter5_i_303_723)">\n' +
            '<path d="M83.3948 87.5C80.833 90.8605 77.2465 97.5815 83.3948 97.5815C89.5431 97.5815 85.9566 90.8605 83.3948 87.5Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Light" filter="url(#filter6_f_303_723)">\n' +
            '<rect x="77.3181" y="81.9456" width="49.379" height="7.2011" rx="3.60055" fill="#FFED8D"/>\n' +
            '</g>\n' +
            '<g id="Lightning" filter="url(#filter7_i_303_723)">\n' +
            '<path d="M121.315 84.5H111.54L107.29 95.8413H114.94L111.398 110L124.29 91.4249H118.623L121.315 84.5Z" fill="url(#paint3_linear_303_723)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_i_303_723" x="80" y="36.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_723"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_723" x="69.5" y="45.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_723"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_723" x="99" y="29" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_723"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_i_303_723" x="88.0986" y="95.5" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_723"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_i_303_723" x="95.5" y="87.5" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_723"/>\n' +
            '</filter>\n' +
            '<filter id="filter5_i_303_723" x="80" y="87.5" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_723"/>\n' +
            '</filter>\n' +
            '<filter id="filter6_f_303_723" x="0.318115" y="4.94556" width="203.379" height="161.201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur_303_723"/>\n' +
            '</filter>\n' +
            '<filter id="filter7_i_303_723" x="105.29" y="84.5" width="19" height="25.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dx="-2"/>\n' +
            '<feGaussianBlur stdDeviation="4.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_723"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_723" x1="80.9223" y1="44.6964" x2="96.0118" y2="33.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_723" x1="73.6979" y1="81.0179" x2="140.06" y2="31.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_723" x1="140.201" y1="53.1339" x2="95.3549" y2="20.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint3_linear_303_723" x1="113.688" y1="107.544" x2="130.106" y2="84.7064" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        daySnow: '<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Snow, Moment=Day">\n' +
            '<g id="clouds" filter="url(#filter0_i_404_320)">\n' +
            '<path d="M46.8259 41.0872C46.8629 40.8674 46.8822 40.6412 46.8822 40.4103C46.8822 38.2507 45.1922 36.5 43.1074 36.5C41.5576 36.5 40.2259 37.4676 39.6446 38.8514C39.1736 38.4302 38.5625 38.1759 37.8946 38.1759C36.4055 38.1759 35.1983 39.4403 35.1983 41C35.1983 41.0869 35.2021 41.1728 35.2094 41.2576C34.4932 41.6211 34 42.3836 34 43.2655C34 44.4996 34.9657 45.5 36.157 45.5H46.343C47.5343 45.5 48.5 44.4996 48.5 43.2655C48.5 42.2034 47.7847 41.3144 46.8259 41.0872Z" fill="url(#paint0_linear_404_320)"/>\n' +
            '</g>\n' +
            '<g id="clouds_2" filter="url(#filter1_i_404_320)">\n' +
            '<path d="M81.8799 65.3781C82.0485 64.4253 82.1364 63.4452 82.1364 62.4448C82.1364 53.0865 74.4438 45.5 64.9545 45.5C57.9001 45.5 51.8386 49.6928 49.1925 55.6894C47.0488 53.8641 44.2671 52.7621 41.2273 52.7621C34.4492 52.7621 28.9545 58.2412 28.9545 65C28.9545 65.3764 28.9716 65.7488 29.0049 66.1165C25.7448 67.6913 23.5 70.9957 23.5 74.8172C23.5 80.1649 27.8957 84.5 33.3182 84.5H79.6818C85.1043 84.5 89.5 80.1649 89.5 74.8172C89.5 70.2148 86.2441 66.3624 81.8799 65.3781Z" fill="url(#paint1_linear_404_320)"/>\n' +
            '</g>\n' +
            '<g id="Subtract" filter="url(#filter2_i_404_320)">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M92.0909 40.5138C92.0909 41.1935 92.0323 41.8595 91.9199 42.5069C94.8294 43.1757 97 45.7934 97 48.9207C97 52.5543 94.0695 55.5 90.4545 55.5H80.6317C77.9424 49.6047 71.9345 45.5 64.9545 45.5C60.3664 45.5 56.1983 47.2736 53.1166 50.1635C53.0401 49.761 53 49.3456 53 48.9207C53 46.324 54.4965 44.0787 56.67 43.0086C56.6477 42.7588 56.6364 42.5057 56.6364 42.25C56.6364 37.6575 60.2995 33.9345 64.8182 33.9345C66.8447 33.9345 68.6992 34.6833 70.1283 35.9236C71.8924 31.8489 75.9334 29 80.6364 29C86.9625 29 92.0909 34.1549 92.0909 40.5138Z" fill="url(#paint2_linear_404_320)"/>\n' +
            '</g>\n' +
            '<g id="Vector" filter="url(#filter3_i_404_320)">\n' +
            '<path d="M42.2872 99C42.2059 99 42.128 98.9671 42.0706 98.9085C42.0131 98.8499 41.9808 98.7704 41.9808 98.6875V97.8794L41.5851 98.2838C41.5276 98.3423 41.4496 98.3752 41.3683 98.3752C41.287 98.3751 41.2091 98.3421 41.1516 98.2834C41.0942 98.2248 41.062 98.1452 41.062 98.0623C41.0621 97.9794 41.0944 97.8998 41.1519 97.8412L41.9808 96.9956V94.5413L39.8979 95.7681L39.594 96.9244C39.5729 97.0044 39.5215 97.0727 39.451 97.114C39.3806 97.1554 39.2969 97.1665 39.2185 97.145C39.14 97.1235 39.0731 97.071 39.0326 96.9991C38.992 96.9273 38.9811 96.8419 39.0022 96.7619L39.1474 96.2106L38.4612 96.6144C38.3909 96.6552 38.3076 96.6659 38.2296 96.6443C38.1515 96.6227 38.085 96.5704 38.0446 96.499C38.0041 96.4275 37.993 96.3426 38.0137 96.2628C38.0344 96.1831 38.0851 96.1149 38.1549 96.0731L38.8411 95.6694L38.2995 95.5212C38.2606 95.5106 38.2242 95.4922 38.1923 95.4672C38.1604 95.4421 38.1337 95.411 38.1136 95.3754C38.0935 95.3398 38.0805 95.3005 38.0753 95.2598C38.0701 95.2191 38.0728 95.1778 38.0832 95.1381C38.0937 95.0985 38.1117 95.0613 38.1362 95.0288C38.1608 94.9962 38.1914 94.969 38.2262 94.9485C38.2611 94.928 38.2996 94.9147 38.3395 94.9094C38.3794 94.9041 38.4199 94.9068 38.4588 94.9175L39.5909 95.2269L41.6745 94L39.5916 92.7731L38.4582 93.0825C38.3802 93.1023 38.2977 93.0901 38.2285 93.0485C38.1593 93.0068 38.1089 92.9391 38.0882 92.8599C38.0674 92.7807 38.078 92.6964 38.1177 92.6251C38.1573 92.5538 38.2228 92.5012 38.3001 92.4787L38.8411 92.3306L38.1549 91.9269C38.1198 91.9065 38.089 91.8793 38.0642 91.8467C38.0395 91.8141 38.0213 91.7769 38.0107 91.7371C38.0001 91.6973 37.9973 91.6558 38.0026 91.6149C38.0078 91.5741 38.0208 91.5347 38.041 91.499C38.0612 91.4633 38.0882 91.432 38.1203 91.407C38.1523 91.3819 38.189 91.3636 38.228 91.3531C38.2671 91.3426 38.3078 91.34 38.3478 91.3456C38.3878 91.3512 38.4264 91.3648 38.4612 91.3856L39.1474 91.7894L39.0022 91.2375C38.9911 91.1976 38.9878 91.1559 38.9926 91.1147C38.9975 91.0735 39.0103 91.0337 39.0304 90.9976C39.0504 90.9615 39.0773 90.9299 39.1095 90.9045C39.1417 90.8792 39.1785 90.8606 39.2177 90.8499C39.257 90.8392 39.298 90.8366 39.3383 90.8422C39.3786 90.8478 39.4173 90.8616 39.4524 90.8826C39.4874 90.9037 39.518 90.9317 39.5423 90.9649C39.5666 90.9982 39.5842 91.036 39.594 91.0763L39.8973 92.2319L41.9808 93.4587V91.0044L41.1519 90.1587C41.1235 90.1297 41.1009 90.0953 41.0854 90.0574C41.07 90.0194 41.0621 89.9788 41.062 89.9377C41.062 89.8967 41.0699 89.856 41.0853 89.818C41.1006 89.7801 41.1232 89.7456 41.1516 89.7166C41.1801 89.6875 41.2139 89.6645 41.251 89.6487C41.2882 89.633 41.328 89.6249 41.3683 89.6248C41.4085 89.6248 41.4484 89.6329 41.4856 89.6485C41.5228 89.6642 41.5566 89.6872 41.5851 89.7163L41.9808 90.1206V89.3125C41.9808 89.2296 42.0131 89.1501 42.0706 89.0915C42.128 89.0329 42.2059 89 42.2872 89C42.3684 89 42.4463 89.0329 42.5038 89.0915C42.5612 89.1501 42.5935 89.2296 42.5935 89.3125V90.1206L42.9899 89.7163C43.0474 89.6577 43.1254 89.6248 43.2066 89.6248C43.2879 89.6249 43.3659 89.6579 43.4233 89.7166C43.4807 89.7752 43.513 89.8548 43.5129 89.9377C43.5129 90.0206 43.4805 90.1002 43.423 90.1587L42.5935 91.0044V93.4587L44.6765 92.2319L44.9803 91.0756C45.0014 90.9956 45.0529 90.9273 45.1233 90.886C45.1937 90.8446 45.2774 90.8335 45.3559 90.855C45.4344 90.8765 45.5012 90.929 45.5418 91.0009C45.5823 91.0727 45.5933 91.1581 45.5721 91.2381L45.4276 91.7894L46.1137 91.3856C46.184 91.3448 46.2673 91.3341 46.3454 91.3557C46.4234 91.3773 46.4899 91.4296 46.5304 91.501C46.5708 91.5725 46.5819 91.6574 46.5613 91.7372C46.5406 91.8169 46.4898 91.8851 46.42 91.9269L45.7339 92.3306L46.2748 92.4787C46.3533 92.5003 46.4202 92.5528 46.4607 92.6246C46.5013 92.6965 46.5122 92.7818 46.4911 92.8619C46.47 92.9419 46.4185 93.0102 46.3481 93.0515C46.2777 93.0929 46.194 93.104 46.1155 93.0825L44.9834 92.7731L42.8998 94L44.9828 95.2269L46.1155 94.9175C46.194 94.896 46.2776 94.9073 46.348 94.9487C46.4184 94.9901 46.4697 95.0584 46.4908 95.1384C46.5118 95.2185 46.5008 95.3038 46.4602 95.3756C46.4196 95.4474 46.3527 95.4998 46.2742 95.5212L45.7333 95.6694L46.4194 96.0731C46.4892 96.1149 46.54 96.1831 46.5606 96.2628C46.5813 96.3426 46.5702 96.4275 46.5298 96.499C46.4893 96.5704 46.4228 96.6227 46.3448 96.6443C46.2667 96.6659 46.1834 96.6552 46.1131 96.6144L45.4269 96.2106L45.5715 96.7625C45.5827 96.8024 45.5859 96.8441 45.5811 96.8853C45.5763 96.9265 45.5634 96.9663 45.5434 97.0024C45.5233 97.0385 45.4964 97.0701 45.4642 97.0955C45.4321 97.1208 45.3953 97.1394 45.356 97.1501C45.3167 97.1608 45.2757 97.1634 45.2354 97.1578C45.1952 97.1522 45.1564 97.1384 45.1214 97.1174C45.0863 97.0963 45.0558 97.0683 45.0315 97.0351C45.0071 97.0018 44.9895 96.964 44.9797 96.9238L44.6765 95.7681L42.5935 94.5413V96.9956L43.4224 97.8412C43.4799 97.8998 43.5123 97.9794 43.5123 98.0623C43.5124 98.1452 43.4801 98.2248 43.4227 98.2834C43.3653 98.3421 43.2873 98.3751 43.206 98.3752C43.1247 98.3752 43.0468 98.3423 42.9893 98.2838L42.5929 97.8794V98.6875C42.5929 98.7704 42.5606 98.8499 42.5032 98.9085C42.4457 98.9671 42.3684 99 42.2872 99Z" fill="#93C0F7"/>\n' +
            '</g>\n' +
            '<g id="Vector_2" filter="url(#filter4_i_404_320)">\n' +
            '<path d="M69.0923 99C69.0147 99 68.9404 98.9671 68.8855 98.9085C68.8307 98.8499 68.7999 98.7704 68.7999 98.6875V97.8794L68.4221 98.2838C68.3672 98.3423 68.2928 98.3752 68.2152 98.3752C68.1376 98.3751 68.0632 98.3421 68.0084 98.2834C67.9536 98.2248 67.9228 98.1452 67.9228 98.0623C67.9229 97.9794 67.9538 97.8998 68.0087 97.8412L68.7999 96.9956V94.5413L66.8116 95.7681L66.5216 96.9244C66.5014 97.0044 66.4523 97.0727 66.3851 97.114C66.3178 97.1554 66.238 97.1665 66.1631 97.145C66.0882 97.1235 66.0243 97.071 65.9856 96.9991C65.9469 96.9273 65.9365 96.8419 65.9566 96.7619L66.0952 96.2106L65.4403 96.6144C65.3732 96.6552 65.2937 96.6659 65.2191 96.6443C65.1446 96.6227 65.0811 96.5704 65.0425 96.499C65.0039 96.4275 64.9933 96.3426 65.0131 96.2628C65.0328 96.1831 65.0813 96.1149 65.1479 96.0731L65.8028 95.6694L65.2859 95.5212C65.2488 95.5106 65.214 95.4922 65.1836 95.4672C65.1531 95.4421 65.1276 95.411 65.1084 95.3754C65.0893 95.3398 65.0768 95.3005 65.0719 95.2598C65.0669 95.2191 65.0695 95.1778 65.0795 95.1381C65.0894 95.0985 65.1066 95.0613 65.1301 95.0288C65.1535 94.9962 65.1827 94.969 65.2159 94.9485C65.2492 94.928 65.286 94.9147 65.3241 94.9094C65.3621 94.9041 65.4008 94.9068 65.4379 94.9175L66.5186 95.2269L68.5075 94L66.5192 92.7731L65.4373 93.0825C65.3629 93.1023 65.2842 93.0901 65.2181 93.0485C65.1521 93.0068 65.1039 92.9391 65.0841 92.8599C65.0644 92.7807 65.0745 92.6964 65.1123 92.6251C65.1502 92.5538 65.2127 92.5012 65.2865 92.4787L65.8028 92.3306L65.1479 91.9269C65.1144 91.9065 65.0849 91.8793 65.0613 91.8467C65.0377 91.8141 65.0203 91.7769 65.0102 91.7371C65.0001 91.6973 64.9975 91.6558 65.0024 91.6149C65.0074 91.5741 65.0199 91.5347 65.0392 91.499C65.0585 91.4633 65.0842 91.432 65.1148 91.407C65.1454 91.3819 65.1804 91.3636 65.2177 91.3531C65.2549 91.3426 65.2938 91.34 65.332 91.3456C65.3702 91.3512 65.407 91.3648 65.4403 91.3856L66.0952 91.7894L65.9566 91.2375C65.946 91.1976 65.9429 91.1559 65.9475 91.1147C65.9521 91.0735 65.9644 91.0337 65.9835 90.9976C66.0027 90.9615 66.0283 90.9299 66.0591 90.9045C66.0898 90.8792 66.1249 90.8606 66.1624 90.8499C66.1999 90.8392 66.239 90.8366 66.2774 90.8422C66.3159 90.8478 66.3529 90.8616 66.3864 90.8826C66.4198 90.9037 66.449 90.9317 66.4722 90.9649C66.4954 90.9982 66.5122 91.036 66.5216 91.0763L66.811 92.2319L68.7999 93.4587V91.0044L68.0087 90.1587C67.9815 90.1297 67.9599 90.0953 67.9452 90.0574C67.9305 90.0194 67.9229 89.9788 67.9228 89.9377C67.9228 89.8967 67.9304 89.856 67.945 89.818C67.9597 89.7801 67.9812 89.7456 68.0084 89.7166C68.0355 89.6875 68.0678 89.6645 68.1033 89.6487C68.1387 89.633 68.1768 89.6249 68.2152 89.6248C68.2536 89.6248 68.2917 89.6329 68.3272 89.6485C68.3627 89.6642 68.3949 89.6872 68.4221 89.7163L68.7999 90.1206V89.3125C68.7999 89.2296 68.8307 89.1501 68.8855 89.0915C68.9404 89.0329 69.0147 89 69.0923 89C69.1698 89 69.2442 89.0329 69.2991 89.0915C69.3539 89.1501 69.3847 89.2296 69.3847 89.3125V90.1206L69.7631 89.7163C69.818 89.6577 69.8924 89.6248 69.97 89.6248C70.0476 89.6249 70.122 89.6579 70.1768 89.7166C70.2316 89.7752 70.2624 89.8548 70.2623 89.9377C70.2623 90.0206 70.2314 90.1002 70.1765 90.1587L69.3847 91.0044V93.4587L71.373 92.2319L71.663 91.0756C71.6832 90.9956 71.7323 90.9273 71.7995 90.886C71.8668 90.8446 71.9466 90.8335 72.0215 90.855C72.0964 90.8765 72.1603 90.929 72.199 91.0009C72.2377 91.0727 72.2481 91.1581 72.2279 91.2381L72.0899 91.7894L72.7449 91.3856C72.812 91.3448 72.8915 91.3341 72.966 91.3557C73.0405 91.3773 73.104 91.4296 73.1426 91.501C73.1812 91.5725 73.1918 91.6574 73.1721 91.7372C73.1524 91.8169 73.1039 91.8851 73.0373 91.9269L72.3823 92.3306L72.8987 92.4787C72.9736 92.5003 73.0374 92.5528 73.0762 92.6246C73.1149 92.6965 73.1253 92.7818 73.1051 92.8619C73.085 92.9419 73.0359 93.0102 72.9686 93.0515C72.9014 93.0929 72.8216 93.104 72.7467 93.0825L71.666 92.7731L69.6771 94L71.6654 95.2269L72.7467 94.9175C72.8216 94.896 72.9014 94.9073 72.9686 94.9487C73.0357 94.9901 73.0848 95.0584 73.1048 95.1384C73.1249 95.2185 73.1144 95.3038 73.0757 95.3756C73.0369 95.4474 72.973 95.4998 72.8981 95.5212L72.3817 95.6694L73.0367 96.0731C73.1033 96.1149 73.1518 96.1831 73.1715 96.2628C73.1913 96.3426 73.1807 96.4275 73.1421 96.499C73.1035 96.5704 73.04 96.6227 72.9654 96.6443C72.8909 96.6659 72.8114 96.6552 72.7443 96.6144L72.0894 96.2106L72.2274 96.7625C72.238 96.8024 72.2411 96.8441 72.2365 96.8853C72.2319 96.9265 72.2196 96.9663 72.2005 97.0024C72.1813 97.0385 72.1557 97.0701 72.125 97.0955C72.0942 97.1208 72.0591 97.1394 72.0216 97.1501C71.9841 97.1608 71.945 97.1634 71.9066 97.1578C71.8681 97.1522 71.8311 97.1384 71.7977 97.1174C71.7642 97.0963 71.7351 97.0683 71.7118 97.0351C71.6886 97.0018 71.6718 96.964 71.6625 96.9238L71.373 95.7681L69.3847 94.5413V96.9956L70.1759 97.8412C70.2308 97.8998 70.2617 97.9794 70.2617 98.0623C70.2618 98.1452 70.231 98.2248 70.1762 98.2834C70.1214 98.3421 70.047 98.3751 69.9694 98.3752C69.8918 98.3752 69.8174 98.3423 69.7625 98.2838L69.3841 97.8794V98.6875C69.3841 98.7704 69.3533 98.8499 69.2985 98.9085C69.2436 98.9671 69.1698 99 69.0923 99Z" fill="#93C0F7"/>\n' +
            '</g>\n' +
            '<g id="Vector_3" filter="url(#filter5_i_404_320)">\n' +
            '<path d="M55.5015 107C55.4162 107 55.3344 106.967 55.2741 106.908C55.2138 106.85 55.1799 106.77 55.1799 106.688V105.879L54.7643 106.284C54.7039 106.342 54.6221 106.375 54.5367 106.375C54.4514 106.375 54.3695 106.342 54.3092 106.283C54.2489 106.225 54.2151 106.145 54.2151 106.062C54.2152 105.979 54.2492 105.9 54.3095 105.841L55.1799 104.996V102.541L52.9928 103.768L52.6737 104.924C52.6515 105.004 52.5975 105.073 52.5236 105.114C52.4496 105.155 52.3618 105.167 52.2794 105.145C52.197 105.123 52.1268 105.071 52.0842 104.999C52.0416 104.927 52.0301 104.842 52.0523 104.762L52.2048 104.211L51.4843 104.614C51.4105 104.655 51.323 104.666 51.2411 104.644C51.1591 104.623 51.0893 104.57 51.0468 104.499C51.0043 104.428 50.9927 104.343 51.0144 104.263C51.0361 104.183 51.0894 104.115 51.1627 104.073L51.8831 103.669L51.3145 103.521C51.2737 103.511 51.2354 103.492 51.2019 103.467C51.1684 103.442 51.1404 103.411 51.1193 103.375C51.0982 103.34 51.0845 103.301 51.0791 103.26C51.0736 103.219 51.0764 103.178 51.0874 103.138C51.0984 103.098 51.1173 103.061 51.1431 103.029C51.1688 102.996 51.2009 102.969 51.2375 102.948C51.2742 102.928 51.3146 102.915 51.3565 102.909C51.3984 102.904 51.4409 102.907 51.4817 102.918L52.6705 103.227L54.8583 102L52.6711 100.773L51.4811 101.082C51.3992 101.102 51.3126 101.09 51.2399 101.048C51.1673 101.007 51.1143 100.939 51.0926 100.86C51.0708 100.781 51.0819 100.696 51.1236 100.625C51.1652 100.554 51.234 100.501 51.3151 100.479L51.8831 100.331L51.1627 99.9269C51.1258 99.9065 51.0934 99.8793 51.0674 99.8467C51.0415 99.8141 51.0223 99.7769 51.0112 99.7371C51.0001 99.6973 50.9972 99.6558 51.0027 99.6149C51.0082 99.5741 51.0219 99.5347 51.0431 99.499C51.0643 99.4633 51.0926 99.432 51.1263 99.407C51.16 99.3819 51.1984 99.3636 51.2394 99.3531C51.2804 99.3426 51.3232 99.34 51.3652 99.3456C51.4072 99.3512 51.4477 99.3648 51.4843 99.3856L52.2048 99.7894L52.0523 99.2375C52.0406 99.1976 52.0372 99.1559 52.0423 99.1147C52.0473 99.0735 52.0608 99.0337 52.0819 98.9976C52.1029 98.9615 52.1312 98.9299 52.165 98.9045C52.1987 98.8792 52.2374 98.8606 52.2786 98.8499C52.3199 98.8392 52.3629 98.8366 52.4052 98.8422C52.4475 98.8478 52.4882 98.8616 52.525 98.8826C52.5618 98.9037 52.5938 98.9317 52.6194 98.9649C52.6449 98.9982 52.6634 99.036 52.6737 99.0763L52.9921 100.232L55.1799 101.459V99.0044L54.3095 98.1587C54.2796 98.1297 54.2559 98.0953 54.2397 98.0574C54.2235 98.0194 54.2152 97.9788 54.2151 97.9377C54.2151 97.8967 54.2234 97.856 54.2395 97.818C54.2557 97.7801 54.2794 97.7456 54.3092 97.7166C54.3391 97.6875 54.3745 97.6645 54.4136 97.6487C54.4526 97.633 54.4945 97.6249 54.5367 97.6248C54.579 97.6248 54.6208 97.6329 54.6599 97.6485C54.6989 97.6642 54.7344 97.6872 54.7643 97.7163L55.1799 98.1206V97.3125C55.1799 97.2296 55.2138 97.1501 55.2741 97.0915C55.3344 97.0329 55.4162 97 55.5015 97C55.5868 97 55.6686 97.0329 55.729 97.0915C55.7893 97.1501 55.8232 97.2296 55.8232 97.3125V98.1206L56.2394 97.7163C56.2998 97.6577 56.3816 97.6248 56.467 97.6248C56.5523 97.6249 56.6342 97.6579 56.6945 97.7166C56.7548 97.7752 56.7886 97.8548 56.7886 97.9377C56.7885 98.0206 56.7545 98.1002 56.6941 98.1587L55.8232 99.0044V101.459L58.0103 100.232L58.3293 99.0756C58.3515 98.9956 58.4055 98.9273 58.4795 98.886C58.5534 98.8446 58.6413 98.8335 58.7237 98.855C58.8061 98.8765 58.8763 98.929 58.9189 99.0009C58.9615 99.0727 58.9729 99.1581 58.9507 99.2381L58.7989 99.7894L59.5194 99.3856C59.5932 99.3448 59.6807 99.3341 59.7626 99.3557C59.8446 99.3773 59.9144 99.4296 59.9569 99.501C59.9994 99.5725 60.011 99.6574 59.9893 99.7372C59.9676 99.8169 59.9143 99.8851 59.841 99.9269L59.1206 100.331L59.6886 100.479C59.771 100.5 59.8412 100.553 59.8838 100.625C59.9264 100.696 59.9378 100.782 59.9156 100.862C59.8935 100.942 59.8395 101.01 59.7655 101.052C59.6916 101.093 59.6037 101.104 59.5213 101.082L58.3326 100.773L56.1448 102L58.3319 103.227L59.5213 102.918C59.6037 102.896 59.6915 102.907 59.7654 102.949C59.8393 102.99 59.8932 103.058 59.9153 103.138C59.9374 103.218 59.9259 103.304 59.8832 103.376C59.8406 103.447 59.7703 103.5 59.6879 103.521L59.1199 103.669L59.8404 104.073C59.9137 104.115 59.967 104.183 59.9887 104.263C60.0104 104.343 59.9987 104.428 59.9563 104.499C59.9138 104.57 59.844 104.623 59.762 104.644C59.68 104.666 59.5926 104.655 59.5188 104.614L58.7983 104.211L58.9501 104.762C58.9618 104.802 58.9652 104.844 58.9601 104.885C58.9551 104.927 58.9416 104.966 58.9205 105.002C58.8995 105.038 58.8712 105.07 58.8374 105.095C58.8037 105.121 58.765 105.139 58.7238 105.15C58.6825 105.161 58.6395 105.163 58.5972 105.158C58.5549 105.152 58.5142 105.138 58.4774 105.117C58.4406 105.096 58.4086 105.068 58.383 105.035C58.3575 105.002 58.339 104.964 58.3287 104.924L58.0103 103.768L55.8232 102.541V104.996L56.6935 105.841C56.7539 105.9 56.7879 105.979 56.7879 106.062C56.788 106.145 56.7541 106.225 56.6938 106.283C56.6335 106.342 56.5517 106.375 56.4663 106.375C56.381 106.375 56.2991 106.342 56.2387 106.284L55.8225 105.879V106.688C55.8225 106.77 55.7886 106.85 55.7283 106.908C55.668 106.967 55.5868 107 55.5015 107Z" fill="#93C0F7"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_i_404_320" x="34" y="36.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_320"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_404_320" x="23.5" y="45.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_320"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_404_320" x="53" y="29" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_320"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_i_404_320" x="38" y="89" width="8.57141" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_320"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_i_404_320" x="65" y="89" width="8.18182" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_320"/>\n' +
            '</filter>\n' +
            '<filter id="filter5_i_404_320" x="51" y="97" width="9" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_320"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_404_320" x1="34.9223" y1="44.6964" x2="50.0118" y2="33.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_404_320" x1="27.6979" y1="81.0179" x2="94.0604" y2="31.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_404_320" x1="94.2014" y1="53.1339" x2="49.3549" y2="20.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        nightClear: '<svg width="161" height="166" viewBox="0 0 161 166" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Clear, Moment=Night">\n' +
            '<g id="Light" filter="url(#filter0_f_303_724)">\n' +
            '<path d="M80.6904 53.3063C73.9196 62.4993 72.7455 75.0453 78.7183 85.3905C84.6912 95.7358 96.1433 100.992 107.49 99.7247C105.077 103 101.954 105.85 98.1904 108.023C83.8641 116.295 65.6831 111.625 57.5819 97.5936C49.4808 83.5621 54.5274 65.482 68.8537 57.2107C72.6174 55.0377 76.6472 53.7579 80.6904 53.3063Z" fill="#FFEE94"/>\n' +
            '</g>\n' +
            '<g id="Moon" filter="url(#filter1_i_303_724)">\n' +
            '<path d="M80.0594 57.1804C73.8787 65.5721 72.807 77.0244 78.2592 86.4679C83.7114 95.9114 94.1653 100.709 104.523 99.5526C102.321 102.543 99.4697 105.144 96.034 107.128C82.9564 114.678 66.3602 110.416 58.9652 97.6073C51.5702 84.7988 56.1769 68.2948 69.2544 60.7445C72.6901 58.7609 76.3686 57.5926 80.0594 57.1804Z" fill="url(#paint0_linear_303_724)"/>\n' +
            '</g>\n' +
            '<g id="Star" filter="url(#filter2_di_303_724)">\n' +
            '<path d="M45.4216 64.9609C44.2999 65.459 43.8621 65.88 43.4609 66.9217C43.1413 65.9122 42.7483 65.4619 41.5001 64.9609C42.7842 64.5426 43.1326 64.0583 43.4609 63.0002C43.8642 63.9754 44.1133 64.5076 45.4216 64.9609Z" fill="url(#paint1_linear_303_724)"/>\n' +
            '</g>\n' +
            '<g id="Star_2" filter="url(#filter3_di_303_724)">\n' +
            '<path d="M57.7065 57.9653C54.866 59.2267 53.7574 60.2927 52.7412 62.9307C51.9319 60.3742 50.9368 59.2338 47.7759 57.9653C51.0275 56.9059 51.91 55.6795 52.7412 53C53.7626 55.4696 54.3934 56.8173 57.7065 57.9653Z" fill="url(#paint2_linear_303_724)"/>\n' +
            '</g>\n' +
            '<g id="Star_3" filter="url(#filter4_di_303_724)">\n' +
            '<path d="M103.356 85.2468C100.515 86.5082 99.4068 87.5742 98.3906 90.2122C97.5814 87.6557 96.5862 86.5153 93.4253 85.2468C96.6769 84.1874 97.5594 82.961 98.3906 80.2815C99.412 82.751 100.043 84.0988 103.356 85.2468Z" fill="url(#paint3_linear_303_724)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_f_303_724" x="0.716675" y="0.306396" width="159.773" height="164.807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_303_724"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_724" x="55.4368" y="57.1804" width="49.0862" height="57.6814" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="4"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_724"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_di_303_724" x="32.7327" y="60.2328" width="21.4564" height="21.4563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="6"/>\n' +
            '<feGaussianBlur stdDeviation="4.38372"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 0.278813 0 0 0 0 0.232917 0 0 0 0 0.5375 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_724"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_724" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="2"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect2_innerShadow_303_724"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_di_303_724" x="39.0084" y="50.2326" width="27.4656" height="27.4656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="6"/>\n' +
            '<feGaussianBlur stdDeviation="4.38372"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 0.278813 0 0 0 0 0.232917 0 0 0 0 0.5375 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_724"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_724" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="2"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect2_innerShadow_303_724"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_di_303_724" x="84.6578" y="77.514" width="27.4656" height="27.4656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="6"/>\n' +
            '<feGaussianBlur stdDeviation="4.38372"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 0.278813 0 0 0 0 0.232917 0 0 0 0 0.5375 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_724"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_724" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="2"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect2_innerShadow_303_724"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_724" x1="81.4053" y1="52.7301" x2="71.5932" y2="112.142" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FFEE94"/>\n' +
            '<stop offset="1" stop-color="#FF9900"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_724" x1="42.8936" y1="67.1054" x2="44.7391" y2="63.6404" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_724" x1="51.3048" y1="63.396" x2="55.9782" y2="54.6214" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint3_linear_303_724" x1="96.9542" y1="90.6774" x2="101.628" y2="81.9029" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        nightPartlycloudy: '<svg width="161" height="166" viewBox="0 0 161 166" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Few clouds, Moment=Night">\n' +
            '<g id="Cloud" filter="url(#filter0_i_303_725)">\n' +
            '<path d="M105.224 60.0913C105.345 59.4018 105.409 58.6926 105.409 57.9687C105.409 51.1966 99.8675 45.7068 93.0324 45.7068C87.951 45.7068 83.5848 48.7408 81.6788 53.0802C80.1347 51.7594 78.131 50.9619 75.9414 50.9619C71.0592 50.9619 67.1013 54.9268 67.1013 59.8177C67.1013 60.09 67.1136 60.3595 67.1376 60.6256C64.7893 61.7652 63.1724 64.1564 63.1724 66.9218C63.1724 70.7915 66.3387 73.9286 70.2445 73.9286H103.641C107.546 73.9286 110.713 70.7915 110.713 66.9218C110.713 63.5913 108.367 60.8036 105.224 60.0913Z" fill="url(#paint0_linear_303_725)"/>\n' +
            '</g>\n' +
            '<g id="Light" filter="url(#filter1_f_303_725)">\n' +
            '<path d="M80.6904 53.3063C73.9196 62.4993 72.7455 75.0453 78.7183 85.3905C84.6912 95.7358 96.1433 100.992 107.49 99.7247C105.077 103 101.954 105.85 98.1904 108.023C83.8641 116.295 65.6831 111.625 57.5819 97.5936C49.4808 83.5621 54.5274 65.482 68.8537 57.2107C72.6174 55.0377 76.6472 53.7579 80.6904 53.3063Z" fill="#FFEE94"/>\n' +
            '</g>\n' +
            '<g id="Moon" filter="url(#filter2_i_303_725)">\n' +
            '<path d="M80.0593 57.1804C73.8786 65.5721 72.8069 77.0244 78.2591 86.4679C83.7113 95.9114 94.1652 100.709 104.523 99.5526C102.321 102.543 99.4695 105.144 96.0339 107.128C82.9563 114.678 66.3601 110.416 58.9651 97.6073C51.5701 84.7988 56.1768 68.2948 69.2543 60.7445C72.69 58.7609 76.3685 57.5926 80.0593 57.1804Z" fill="url(#paint1_linear_303_725)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter3_i_303_725)">\n' +
            '<path d="M76.0514 102.499C76.1729 101.81 76.2362 101.101 76.2362 100.377C76.2362 93.6048 70.6952 88.115 63.86 88.115C58.7786 88.115 54.4125 91.149 52.5065 95.4884C50.9623 94.1676 48.9587 93.3701 46.7691 93.3701C41.8868 93.3701 37.9289 97.335 37.9289 102.226C37.9289 102.498 37.9412 102.768 37.9652 103.034C35.617 104.173 34 106.565 34 109.33C34 113.2 37.1663 116.337 41.0721 116.337H74.4681C78.374 116.337 81.5402 113.2 81.5402 109.33C81.5402 106 79.195 103.212 76.0514 102.499Z" fill="url(#paint2_linear_303_725)"/>\n' +
            '</g>\n' +
            '<g id="Star" filter="url(#filter4_di_303_725)">\n' +
            '<path d="M57.7067 57.9653C54.8662 59.2267 53.7575 60.2927 52.7413 62.9307C51.9321 60.3742 50.937 59.2338 47.776 57.9653C51.0277 56.9059 51.9101 55.6795 52.7413 53C53.7627 55.4696 54.3935 56.8173 57.7067 57.9653Z" fill="url(#paint3_linear_303_725)"/>\n' +
            '</g>\n' +
            '<g id="Star_2" filter="url(#filter5_di_303_725)">\n' +
            '<path d="M103.356 85.2468C100.515 86.5082 99.4068 87.5742 98.3906 90.2122C97.5814 87.6557 96.5862 86.5153 93.4253 85.2468C96.6769 84.1874 97.5594 82.961 98.3906 80.2815C99.412 82.751 100.043 84.0988 103.356 85.2468Z" fill="url(#paint4_linear_303_725)"/>\n' +
            '</g>\n' +
            '<g id="Star_3" filter="url(#filter6_di_303_725)">\n' +
            '<path d="M45.4216 64.9609C44.2999 65.459 43.8621 65.88 43.4609 66.9217C43.1413 65.9122 42.7483 65.4619 41.5001 64.9609C42.7842 64.5426 43.1326 64.0583 43.4609 63.0002C43.8642 63.9754 44.1133 64.5076 45.4216 64.9609Z" fill="url(#paint5_linear_303_725)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_i_303_725" x="63.1724" y="45.7068" width="47.5403" height="38.2217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_725"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_f_303_725" x="0.716675" y="0.306396" width="159.773" height="164.807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_303_725"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_725" x="55.4368" y="57.1804" width="49.0862" height="57.6814" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="4"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_725"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_i_303_725" x="34" y="88.115" width="47.5403" height="38.2217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_725"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_di_303_725" x="39.0086" y="50.2326" width="27.4656" height="27.4656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="6"/>\n' +
            '<feGaussianBlur stdDeviation="4.38372"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 0.278813 0 0 0 0 0.232917 0 0 0 0 0.5375 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_725"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_725" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="2"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect2_innerShadow_303_725"/>\n' +
            '</filter>\n' +
            '<filter id="filter5_di_303_725" x="84.6578" y="77.514" width="27.4656" height="27.4656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="6"/>\n' +
            '<feGaussianBlur stdDeviation="4.38372"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 0.278813 0 0 0 0 0.232917 0 0 0 0 0.5375 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_725"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_725" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="2"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect2_innerShadow_303_725"/>\n' +
            '</filter>\n' +
            '<filter id="filter6_di_303_725" x="32.7327" y="60.2328" width="21.4564" height="21.4563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="6"/>\n' +
            '<feGaussianBlur stdDeviation="4.38372"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 0.278813 0 0 0 0 0.232917 0 0 0 0 0.5375 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_725"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_725" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="2"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect2_innerShadow_303_725"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_725" x1="66.1961" y1="71.4088" x2="114.156" y2="35.5436" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_725" x1="81.4051" y1="52.7301" x2="71.5931" y2="112.142" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FFEE94"/>\n' +
            '<stop offset="1" stop-color="#FF9900"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_725" x1="37.0237" y1="113.817" x2="84.984" y2="77.9518" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint3_linear_303_725" x1="51.3049" y1="63.396" x2="55.9783" y2="54.6214" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint4_linear_303_725" x1="96.9542" y1="90.6774" x2="101.628" y2="81.9029" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint5_linear_303_725" x1="42.8936" y1="67.1054" x2="44.7391" y2="63.6404" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        nightCloudy: '<svg width="161" height="166" viewBox="0 0 161 166" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Cloudy, Moment=Night">\n' +
            '<g id="Light" opacity="0.5" filter="url(#filter0_f_303_726)">\n' +
            '<path d="M80.6904 53.3063C73.9196 62.4993 72.7455 75.0453 78.7183 85.3905C84.6912 95.7358 96.1433 100.992 107.49 99.7247C105.077 103 101.954 105.85 98.1904 108.023C83.8641 116.295 65.6831 111.625 57.5819 97.5936C49.4808 83.5621 54.5274 65.482 68.8537 57.2107C72.6174 55.0377 76.6472 53.7579 80.6904 53.3063Z" fill="#FFEE94"/>\n' +
            '</g>\n' +
            '<g id="Cloud" filter="url(#filter1_i_303_726)">\n' +
            '<path d="M64.3259 68.0872C64.3629 67.8674 64.3822 67.6412 64.3822 67.4103C64.3822 65.2507 62.6922 63.5 60.6074 63.5C59.0576 63.5 57.7259 64.4676 57.1446 65.8514C56.6736 65.4302 56.0625 65.1759 55.3946 65.1759C53.9055 65.1759 52.6983 66.4403 52.6983 68C52.6983 68.0869 52.7021 68.1728 52.7094 68.2576C51.9932 68.6211 51.5 69.3836 51.5 70.2655C51.5 71.4996 52.4657 72.5 53.657 72.5H63.843C65.0343 72.5 66 71.4996 66 70.2655C66 69.2034 65.2847 68.3144 64.3259 68.0872Z" fill="url(#paint0_linear_303_726)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter2_i_303_726)">\n' +
            '<path d="M99.3799 92.3781C99.5485 91.4253 99.6364 90.4452 99.6364 89.4448C99.6364 80.0865 91.9438 72.5 82.4545 72.5C75.4001 72.5 69.3386 76.6928 66.6925 82.6894C64.5488 80.8641 61.7671 79.7621 58.7273 79.7621C51.9492 79.7621 46.4545 85.2412 46.4545 92C46.4545 92.3764 46.4716 92.7488 46.5049 93.1165C43.2448 94.6913 41 97.9957 41 101.817C41 107.165 45.3957 111.5 50.8182 111.5H97.1818C102.604 111.5 107 107.165 107 101.817C107 97.2148 103.744 93.3624 99.3799 92.3781Z" fill="url(#paint1_linear_303_726)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_3" filter="url(#filter3_i_303_726)">\n' +
            '<path d="M109.591 67.5138C109.591 68.1935 109.532 68.8595 109.42 69.5069C112.329 70.1757 114.5 72.7934 114.5 75.9207C114.5 79.5543 111.57 82.5 107.955 82.5H98.1317C95.4424 76.6047 89.4345 72.5 82.4545 72.5C77.8664 72.5 73.6983 74.2736 70.6166 77.1635C70.5401 76.761 70.5 76.3456 70.5 75.9207C70.5 73.324 71.9965 71.0787 74.17 70.0086C74.1477 69.7588 74.1364 69.5057 74.1364 69.25C74.1364 64.6575 77.7995 60.9345 82.3182 60.9345C84.3447 60.9345 86.1992 61.6833 87.6283 62.9236C89.3924 58.8489 93.4334 56 98.1364 56C104.463 56 109.591 61.1549 109.591 67.5138Z" fill="url(#paint2_linear_303_726)"/>\n' +
            '</g>\n' +
            '<g id="Moon" filter="url(#filter4_i_303_726)">\n' +
            '<path d="M76.6973 63.2073C77.5524 61.0831 78.6783 59.0553 80.0594 57.1802C76.3686 57.5924 72.6901 58.7606 69.2544 60.7442C61.7763 65.0617 57.0681 72.3069 55.7899 80.1147C56.731 79.8842 57.7148 79.762 58.7273 79.762C61.7671 79.762 64.5488 80.864 66.6924 82.6893C67.6176 80.5928 68.9601 78.7168 70.6166 77.1634C70.5401 76.7609 70.5 76.3455 70.5 75.9206C70.5 73.3239 71.9965 71.0786 74.1699 70.0085C74.1477 69.7587 74.1364 69.5056 74.1364 69.2499C74.1364 66.8697 75.1203 64.7231 76.6973 63.2073Z" fill="url(#paint3_linear_303_726)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_f_303_726" x="0.716675" y="0.306396" width="159.773" height="164.807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_303_726"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_726" x="51.5" y="63.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_726"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_726" x="41" y="72.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_726"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_i_303_726" x="70.5" y="56" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_726"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_i_303_726" x="55.7899" y="57.1802" width="24.2695" height="29.509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="4"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_726"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_726" x1="52.4223" y1="71.6964" x2="67.5118" y2="60.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_726" x1="45.1979" y1="108.018" x2="111.56" y2="58.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_726" x1="111.701" y1="80.1339" x2="66.8549" y2="47.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint3_linear_303_726" x1="81.4051" y1="52.7298" x2="71.5931" y2="112.142" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FFEE94"/>\n' +
            '<stop offset="1" stop-color="#FF9900"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        nightRain: '<svg width="161" height="166" viewBox="0 0 161 166" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Rain, Moment=Night">\n' +
            '<g id="Drop" filter="url(#filter0_i_303_727)">\n' +
            '<path d="M59.0913 114.735C56.5295 118.096 52.943 124.817 59.0913 124.817C65.2397 124.817 61.6531 118.096 59.0913 114.735Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Drop_2" filter="url(#filter1_i_303_727)">\n' +
            '<path d="M73.4934 120C70.9316 123.361 67.3451 130.082 73.4934 130.082C79.6418 130.082 76.0552 123.361 73.4934 120Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Drop_3" filter="url(#filter2_i_303_727)">\n' +
            '<path d="M86.867 114.735C84.3052 118.096 80.7187 124.817 86.867 124.817C93.0153 124.817 89.4288 118.096 86.867 114.735Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Light" opacity="0.4" filter="url(#filter3_f_303_727)">\n' +
            '<path d="M80.6904 53.3063C73.9196 62.4993 72.7455 75.0453 78.7183 85.3905C84.6912 95.7358 96.1433 100.992 107.49 99.7247C105.077 103 101.954 105.85 98.1904 108.023C83.8641 116.295 65.6831 111.625 57.5819 97.5936C49.4808 83.5621 54.5274 65.482 68.8537 57.2107C72.6174 55.0377 76.6472 53.7579 80.6904 53.3063Z" fill="#FFEE94"/>\n' +
            '</g>\n' +
            '<g id="Cloud" filter="url(#filter4_i_303_727)">\n' +
            '<path d="M64.3259 68.0872C64.3629 67.8674 64.3822 67.6412 64.3822 67.4103C64.3822 65.2507 62.6922 63.5 60.6074 63.5C59.0576 63.5 57.7259 64.4676 57.1446 65.8514C56.6736 65.4302 56.0625 65.1759 55.3946 65.1759C53.9055 65.1759 52.6983 66.4403 52.6983 68C52.6983 68.0869 52.7021 68.1728 52.7094 68.2576C51.9932 68.6211 51.5 69.3836 51.5 70.2655C51.5 71.4996 52.4657 72.5 53.657 72.5H63.843C65.0343 72.5 66 71.4996 66 70.2655C66 69.2034 65.2847 68.3144 64.3259 68.0872Z" fill="url(#paint0_linear_303_727)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter5_i_303_727)">\n' +
            '<path d="M99.3799 92.3781C99.5485 91.4253 99.6364 90.4452 99.6364 89.4448C99.6364 80.0865 91.9438 72.5 82.4545 72.5C75.4001 72.5 69.3386 76.6928 66.6925 82.6894C64.5488 80.8641 61.7671 79.7621 58.7273 79.7621C51.9492 79.7621 46.4545 85.2412 46.4545 92C46.4545 92.3764 46.4716 92.7488 46.5049 93.1165C43.2448 94.6913 41 97.9957 41 101.817C41 107.165 45.3957 111.5 50.8182 111.5H97.1818C102.604 111.5 107 107.165 107 101.817C107 97.2148 103.744 93.3624 99.3799 92.3781Z" fill="url(#paint1_linear_303_727)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_3" filter="url(#filter6_i_303_727)">\n' +
            '<path d="M109.591 67.5138C109.591 68.1935 109.532 68.8595 109.42 69.5069C112.329 70.1757 114.5 72.7934 114.5 75.9207C114.5 79.5543 111.57 82.5 107.955 82.5H98.1317C95.4424 76.6047 89.4345 72.5 82.4545 72.5C77.8664 72.5 73.6983 74.2736 70.6166 77.1635C70.5401 76.761 70.5 76.3456 70.5 75.9207C70.5 73.324 71.9965 71.0787 74.17 70.0086C74.1477 69.7588 74.1364 69.5057 74.1364 69.25C74.1364 64.6575 77.7995 60.9345 82.3182 60.9345C84.3447 60.9345 86.1992 61.6833 87.6283 62.9236C89.3924 58.8489 93.4334 56 98.1364 56C104.463 56 109.591 61.1549 109.591 67.5138Z" fill="url(#paint2_linear_303_727)"/>\n' +
            '</g>\n' +
            '<g id="Moon" filter="url(#filter7_i_303_727)">\n' +
            '<path d="M76.6973 63.2073C77.5524 61.0831 78.6783 59.0553 80.0594 57.1802C76.3686 57.5924 72.6901 58.7606 69.2544 60.7442C61.7763 65.0617 57.0681 72.3069 55.7899 80.1147C56.731 79.8842 57.7148 79.762 58.7273 79.762C61.7671 79.762 64.5488 80.864 66.6924 82.6893C67.6176 80.5928 68.9601 78.7168 70.6166 77.1634C70.5401 76.7609 70.5 76.3455 70.5 75.9206C70.5 73.3239 71.9965 71.0786 74.1699 70.0085C74.1477 69.7587 74.1363 69.5056 74.1363 69.2499C74.1363 66.8697 75.1203 64.7231 76.6973 63.2073Z" fill="url(#paint3_linear_303_727)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_i_303_727" x="55.6965" y="114.735" width="6.78955" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_727"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_727" x="70.0986" y="120" width="6.78955" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_727"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_727" x="83.4722" y="114.735" width="6.78955" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_727"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_f_303_727" x="0.716675" y="0.306396" width="159.773" height="164.807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_303_727"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_i_303_727" x="51.5" y="63.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_727"/>\n' +
            '</filter>\n' +
            '<filter id="filter5_i_303_727" x="41" y="72.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_727"/>\n' +
            '</filter>\n' +
            '<filter id="filter6_i_303_727" x="70.5" y="56" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_727"/>\n' +
            '</filter>\n' +
            '<filter id="filter7_i_303_727" x="55.7899" y="57.1802" width="24.2694" height="29.509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="4"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_727"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_727" x1="52.4223" y1="71.6964" x2="67.5118" y2="60.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_727" x1="45.1979" y1="108.018" x2="111.56" y2="58.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_727" x1="111.701" y1="80.1339" x2="66.8549" y2="47.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint3_linear_303_727" x1="81.4051" y1="52.7298" x2="71.5931" y2="112.142" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FFEE94"/>\n' +
            '<stop offset="1" stop-color="#FF9900"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        nightThunderstorms: '<svg width="204" height="193" viewBox="0 0 204 193" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Weather=Storm, Moment=Night">\n' +
            '<g id="Light" opacity="0.4" filter="url(#filter0_f_303_728)">\n' +
            '<path d="M108.69 53.3063C101.92 62.4993 100.746 75.0453 106.718 85.3905C112.691 95.7358 124.143 100.992 135.49 99.7247C133.077 103 129.954 105.85 126.19 108.023C111.864 116.295 93.6831 111.625 85.5819 97.5936C77.4808 83.5621 82.5274 65.482 96.8537 57.2107C100.617 55.0377 104.647 53.7579 108.69 53.3063Z" fill="#FFEE94"/>\n' +
            '</g>\n' +
            '<g id="Drop" filter="url(#filter1_i_303_728)">\n' +
            '<path d="M96.4934 120C93.9316 123.361 90.3451 130.082 96.4934 130.082C102.642 130.082 99.0552 123.361 96.4934 120Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Drop_2" filter="url(#filter2_i_303_728)">\n' +
            '<path d="M83.3948 113.5C80.833 116.861 77.2465 123.582 83.3948 123.582C89.5431 123.582 85.9566 116.861 83.3948 113.5Z" fill="#507CB1"/>\n' +
            '</g>\n' +
            '<g id="Light_2" filter="url(#filter3_f_303_728)">\n' +
            '<rect x="77.3181" y="107.946" width="49.379" height="7.2011" rx="3.60055" fill="#FFED8D"/>\n' +
            '</g>\n' +
            '<g id="Lightning" filter="url(#filter4_i_303_728)">\n' +
            '<path d="M124.29 117.425H118.623L120.926 111.5H111.165L107.29 121.841H114.94L111.398 136L124.29 117.425Z" fill="url(#paint0_linear_303_728)"/>\n' +
            '</g>\n' +
            '<g id="Cloud" filter="url(#filter5_i_303_728)">\n' +
            '<path d="M92.3259 68.0872C92.3629 67.8674 92.3822 67.6412 92.3822 67.4103C92.3822 65.2507 90.6922 63.5 88.6074 63.5C87.0576 63.5 85.7259 64.4676 85.1446 65.8514C84.6736 65.4302 84.0625 65.1759 83.3946 65.1759C81.9055 65.1759 80.6983 66.4403 80.6983 68C80.6983 68.0869 80.7021 68.1728 80.7094 68.2576C79.9932 68.6211 79.5 69.3836 79.5 70.2655C79.5 71.4996 80.4657 72.5 81.657 72.5H91.843C93.0343 72.5 94 71.4996 94 70.2655C94 69.2034 93.2847 68.3144 92.3259 68.0872Z" fill="url(#paint1_linear_303_728)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_2" filter="url(#filter6_i_303_728)">\n' +
            '<path d="M127.38 92.3781C127.548 91.4253 127.636 90.4452 127.636 89.4448C127.636 80.0865 119.944 72.5 110.455 72.5C103.4 72.5 97.3386 76.6928 94.6925 82.6894C92.5488 80.8641 89.7671 79.7621 86.7273 79.7621C79.9492 79.7621 74.4545 85.2412 74.4545 92C74.4545 92.3764 74.4716 92.7488 74.5049 93.1165C71.2448 94.6913 69 97.9957 69 101.817C69 107.165 73.3957 111.5 78.8182 111.5H125.182C130.604 111.5 135 107.165 135 101.817C135 97.2148 131.744 93.3624 127.38 92.3781Z" fill="url(#paint2_linear_303_728)"/>\n' +
            '</g>\n' +
            '<g id="Cloud_3" filter="url(#filter7_i_303_728)">\n' +
            '<path d="M137.591 67.5138C137.591 68.1935 137.532 68.8595 137.42 69.5069C140.329 70.1757 142.5 72.7934 142.5 75.9207C142.5 79.5543 139.57 82.5 135.955 82.5H126.132C123.442 76.6047 117.435 72.5 110.455 72.5C105.866 72.5 101.698 74.2736 98.6166 77.1635C98.5401 76.761 98.5 76.3456 98.5 75.9207C98.5 73.324 99.9965 71.0787 102.17 70.0086C102.148 69.7588 102.136 69.5057 102.136 69.25C102.136 64.6575 105.799 60.9345 110.318 60.9345C112.345 60.9345 114.199 61.6833 115.628 62.9236C117.392 58.8489 121.433 56 126.136 56C132.463 56 137.591 61.1549 137.591 67.5138Z" fill="url(#paint3_linear_303_728)"/>\n' +
            '</g>\n' +
            '<g id="Moon" filter="url(#filter8_i_303_728)">\n' +
            '<path d="M104.697 63.2073C105.552 61.0831 106.678 59.0553 108.059 57.1802C104.369 57.5924 100.69 58.7606 97.2544 60.7442C89.7763 65.0617 85.0681 72.3069 83.7899 80.1147C84.731 79.8842 85.7148 79.762 86.7273 79.762C89.7671 79.762 92.5488 80.864 94.6924 82.6893C95.6176 80.5928 96.9601 78.7168 98.6166 77.1634C98.5401 76.7609 98.5 76.3455 98.5 75.9206C98.5 73.3239 99.9965 71.0786 102.17 70.0085C102.148 69.7587 102.136 69.5056 102.136 69.2499C102.136 66.8697 103.12 64.7231 104.697 63.2073Z" fill="url(#paint4_linear_303_728)"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_f_303_728" x="28.7167" y="0.306396" width="159.773" height="164.807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_303_728" x="93.0986" y="120" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_303_728" x="80" y="113.5" width="6.78961" height="13.0815" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_f_303_728" x="0.318115" y="30.9456" width="203.379" height="161.201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_i_303_728" x="105.29" y="111.5" width="19" height="24.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dx="-2"/>\n' +
            '<feGaussianBlur stdDeviation="4.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter5_i_303_728" x="79.5" y="63.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter6_i_303_728" x="69" y="72.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter7_i_303_728" x="98.5" y="56" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_728"/>\n' +
            '</filter>\n' +
            '<filter id="filter8_i_303_728" x="83.7899" y="57.1802" width="24.2695" height="29.509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="4"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_303_728"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_303_728" x1="113.688" y1="133.544" x2="130.106" y2="110.706" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FF9900"/>\n' +
            '<stop offset="1" stop-color="#FFEE94"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_303_728" x1="80.4223" y1="71.6964" x2="95.5118" y2="60.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_303_728" x1="73.1979" y1="108.018" x2="139.56" y2="58.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint3_linear_303_728" x1="139.701" y1="80.1339" x2="94.8549" y2="47.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint4_linear_303_728" x1="109.405" y1="52.7298" x2="99.5931" y2="112.142" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FFEE94"/>\n' +
            '<stop offset="1" stop-color="#FF9900"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        nightSnow: '<svg width="161" height="166" viewBox="0 0 161 166" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g opacity="0.4" filter="url(#filter0_f_404_330)">\n' +
            '<path d="M80.6904 53.3063C73.9196 62.4993 72.7455 75.0453 78.7183 85.3905C84.6912 95.7358 96.1433 100.992 107.49 99.7247C105.077 103 101.954 105.85 98.1904 108.023C83.8641 116.295 65.6831 111.625 57.5819 97.5936C49.4808 83.5621 54.5274 65.482 68.8537 57.2107C72.6174 55.0377 76.6472 53.7579 80.6904 53.3063Z" fill="#FFEE94"/>\n' +
            '</g>\n' +
            '<g filter="url(#filter1_i_404_330)">\n' +
            '<path d="M64.3259 68.0872C64.3629 67.8674 64.3822 67.6412 64.3822 67.4103C64.3822 65.2507 62.6922 63.5 60.6074 63.5C59.0576 63.5 57.7259 64.4676 57.1446 65.8514C56.6736 65.4302 56.0625 65.1759 55.3946 65.1759C53.9055 65.1759 52.6983 66.4403 52.6983 68C52.6983 68.0869 52.7021 68.1728 52.7094 68.2576C51.9932 68.6211 51.5 69.3836 51.5 70.2655C51.5 71.4996 52.4657 72.5 53.657 72.5H63.843C65.0343 72.5 66 71.4996 66 70.2655C66 69.2034 65.2847 68.3144 64.3259 68.0872Z" fill="url(#paint0_linear_404_330)"/>\n' +
            '</g>\n' +
            '<g filter="url(#filter2_i_404_330)">\n' +
            '<path d="M99.3799 92.3781C99.5485 91.4253 99.6364 90.4452 99.6364 89.4448C99.6364 80.0865 91.9438 72.5 82.4545 72.5C75.4001 72.5 69.3386 76.6928 66.6925 82.6894C64.5488 80.8641 61.7671 79.7621 58.7273 79.7621C51.9492 79.7621 46.4545 85.2412 46.4545 92C46.4545 92.3764 46.4716 92.7488 46.5049 93.1165C43.2448 94.6913 41 97.9957 41 101.817C41 107.165 45.3957 111.5 50.8182 111.5H97.1818C102.604 111.5 107 107.165 107 101.817C107 97.2148 103.744 93.3624 99.3799 92.3781Z" fill="url(#paint1_linear_404_330)"/>\n' +
            '</g>\n' +
            '<g filter="url(#filter3_i_404_330)">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M109.591 67.5138C109.591 68.1935 109.532 68.8595 109.42 69.5069C112.329 70.1757 114.5 72.7934 114.5 75.9207C114.5 79.5543 111.57 82.5 107.955 82.5H98.1317C95.4424 76.6047 89.4345 72.5 82.4545 72.5C77.8664 72.5 73.6983 74.2736 70.6166 77.1635C70.5401 76.761 70.5 76.3456 70.5 75.9207C70.5 73.324 71.9965 71.0787 74.17 70.0086C74.1477 69.7588 74.1364 69.5057 74.1364 69.25C74.1364 64.6575 77.7995 60.9345 82.3182 60.9345C84.3447 60.9345 86.1992 61.6833 87.6283 62.9236C89.3924 58.8489 93.4334 56 98.1364 56C104.463 56 109.591 61.1549 109.591 67.5138Z" fill="url(#paint2_linear_404_330)"/>\n' +
            '</g>\n' +
            '<g filter="url(#filter4_i_404_330)">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M76.6973 63.2073C77.5524 61.0831 78.6783 59.0553 80.0594 57.1802C76.3686 57.5924 72.6901 58.7606 69.2544 60.7442C61.7763 65.0617 57.0681 72.3069 55.7899 80.1147C56.731 79.8842 57.7148 79.762 58.7273 79.762C61.7671 79.762 64.5488 80.864 66.6924 82.6893C67.6176 80.5928 68.9601 78.7168 70.6166 77.1634C70.5401 76.7609 70.5 76.3455 70.5 75.9206C70.5 73.3239 71.9965 71.0786 74.1699 70.0085C74.1477 69.7587 74.1363 69.5056 74.1363 69.2499C74.1363 66.8697 75.1203 64.7231 76.6973 63.2073Z" fill="url(#paint3_linear_404_330)"/>\n' +
            '</g>\n' +
            '<g filter="url(#filter5_i_404_330)">\n' +
            '<path d="M60.2872 125C60.2059 125 60.128 124.967 60.0706 124.908C60.0131 124.85 59.9808 124.77 59.9808 124.688V123.879L59.5851 124.284C59.5276 124.342 59.4496 124.375 59.3683 124.375C59.287 124.375 59.2091 124.342 59.1516 124.283C59.0942 124.225 59.062 124.145 59.062 124.062C59.0621 123.979 59.0944 123.9 59.1519 123.841L59.9808 122.996V120.541L57.8979 121.768L57.594 122.924C57.5729 123.004 57.5215 123.073 57.451 123.114C57.3806 123.155 57.2969 123.167 57.2185 123.145C57.14 123.123 57.0731 123.071 57.0326 122.999C56.992 122.927 56.9811 122.842 57.0022 122.762L57.1474 122.211L56.4612 122.614C56.3909 122.655 56.3076 122.666 56.2296 122.644C56.1515 122.623 56.085 122.57 56.0446 122.499C56.0041 122.428 55.993 122.343 56.0137 122.263C56.0344 122.183 56.0851 122.115 56.1549 122.073L56.8411 121.669L56.2995 121.521C56.2606 121.511 56.2242 121.492 56.1923 121.467C56.1604 121.442 56.1337 121.411 56.1136 121.375C56.0935 121.34 56.0805 121.301 56.0753 121.26C56.0701 121.219 56.0728 121.178 56.0832 121.138C56.0937 121.098 56.1117 121.061 56.1362 121.029C56.1608 120.996 56.1914 120.969 56.2262 120.948C56.2611 120.928 56.2996 120.915 56.3395 120.909C56.3794 120.904 56.4199 120.907 56.4588 120.918L57.5909 121.227L59.6745 120L57.5916 118.773L56.4582 119.082C56.3802 119.102 56.2977 119.09 56.2285 119.048C56.1593 119.007 56.1089 118.939 56.0882 118.86C56.0674 118.781 56.078 118.696 56.1177 118.625C56.1573 118.554 56.2228 118.501 56.3001 118.479L56.8411 118.331L56.1549 117.927C56.1198 117.907 56.089 117.879 56.0642 117.847C56.0395 117.814 56.0213 117.777 56.0107 117.737C56.0001 117.697 55.9973 117.656 56.0026 117.615C56.0078 117.574 56.0208 117.535 56.041 117.499C56.0612 117.463 56.0882 117.432 56.1203 117.407C56.1523 117.382 56.189 117.364 56.228 117.353C56.2671 117.343 56.3078 117.34 56.3478 117.346C56.3878 117.351 56.4264 117.365 56.4612 117.386L57.1474 117.789L57.0022 117.237C56.9911 117.198 56.9878 117.156 56.9926 117.115C56.9975 117.073 57.0103 117.034 57.0304 116.998C57.0504 116.962 57.0773 116.93 57.1095 116.905C57.1417 116.879 57.1785 116.861 57.2177 116.85C57.257 116.839 57.298 116.837 57.3383 116.842C57.3786 116.848 57.4173 116.862 57.4524 116.883C57.4874 116.904 57.518 116.932 57.5423 116.965C57.5666 116.998 57.5842 117.036 57.594 117.076L57.8973 118.232L59.9808 119.459V117.004L59.1519 116.159C59.1235 116.13 59.1009 116.095 59.0854 116.057C59.07 116.019 59.0621 115.979 59.062 115.938C59.062 115.897 59.0699 115.856 59.0853 115.818C59.1006 115.78 59.1232 115.746 59.1516 115.717C59.1801 115.688 59.2139 115.664 59.251 115.649C59.2882 115.633 59.328 115.625 59.3683 115.625C59.4085 115.625 59.4484 115.633 59.4856 115.649C59.5228 115.664 59.5566 115.687 59.5851 115.716L59.9808 116.121V115.312C59.9808 115.23 60.0131 115.15 60.0706 115.092C60.128 115.033 60.2059 115 60.2872 115C60.3684 115 60.4463 115.033 60.5038 115.092C60.5612 115.15 60.5935 115.23 60.5935 115.312V116.121L60.9899 115.716C61.0474 115.658 61.1254 115.625 61.2066 115.625C61.2879 115.625 61.3659 115.658 61.4233 115.717C61.4807 115.775 61.513 115.855 61.5129 115.938C61.5129 116.021 61.4805 116.1 61.423 116.159L60.5935 117.004V119.459L62.6765 118.232L62.9803 117.076C63.0014 116.996 63.0529 116.927 63.1233 116.886C63.1937 116.845 63.2774 116.833 63.3559 116.855C63.4344 116.877 63.5012 116.929 63.5418 117.001C63.5823 117.073 63.5933 117.158 63.5721 117.238L63.4276 117.789L64.1137 117.386C64.184 117.345 64.2673 117.334 64.3454 117.356C64.4234 117.377 64.4899 117.43 64.5304 117.501C64.5708 117.572 64.5819 117.657 64.5613 117.737C64.5406 117.817 64.4898 117.885 64.42 117.927L63.7339 118.331L64.2748 118.479C64.3533 118.5 64.4202 118.553 64.4607 118.625C64.5013 118.696 64.5122 118.782 64.4911 118.862C64.47 118.942 64.4185 119.01 64.3481 119.052C64.2777 119.093 64.194 119.104 64.1155 119.082L62.9834 118.773L60.8998 120L62.9828 121.227L64.1155 120.918C64.194 120.896 64.2776 120.907 64.348 120.949C64.4184 120.99 64.4697 121.058 64.4908 121.138C64.5118 121.218 64.5008 121.304 64.4602 121.376C64.4196 121.447 64.3527 121.5 64.2742 121.521L63.7333 121.669L64.4194 122.073C64.4892 122.115 64.54 122.183 64.5606 122.263C64.5813 122.343 64.5702 122.428 64.5298 122.499C64.4893 122.57 64.4228 122.623 64.3448 122.644C64.2667 122.666 64.1834 122.655 64.1131 122.614L63.4269 122.211L63.5715 122.762C63.5827 122.802 63.5859 122.844 63.5811 122.885C63.5763 122.927 63.5634 122.966 63.5434 123.002C63.5233 123.038 63.4964 123.07 63.4642 123.095C63.4321 123.121 63.3953 123.139 63.356 123.15C63.3167 123.161 63.2757 123.163 63.2354 123.158C63.1952 123.152 63.1564 123.138 63.1214 123.117C63.0863 123.096 63.0558 123.068 63.0315 123.035C63.0071 123.002 62.9895 122.964 62.9797 122.924L62.6765 121.768L60.5935 120.541V122.996L61.4224 123.841C61.4799 123.9 61.5123 123.979 61.5123 124.062C61.5124 124.145 61.4801 124.225 61.4227 124.283C61.3653 124.342 61.2873 124.375 61.206 124.375C61.1247 124.375 61.0468 124.342 60.9893 124.284L60.5929 123.879V124.688C60.5929 124.77 60.5606 124.85 60.5032 124.908C60.4457 124.967 60.3684 125 60.2872 125Z" fill="#5D6DFD"/>\n' +
            '</g>\n' +
            '<g filter="url(#filter6_i_404_330)">\n' +
            '<path d="M87.0923 125C87.0147 125 86.9404 124.967 86.8855 124.908C86.8307 124.85 86.7999 124.77 86.7999 124.688V123.879L86.4221 124.284C86.3672 124.342 86.2928 124.375 86.2152 124.375C86.1376 124.375 86.0632 124.342 86.0084 124.283C85.9536 124.225 85.9228 124.145 85.9228 124.062C85.9229 123.979 85.9538 123.9 86.0087 123.841L86.7999 122.996V120.541L84.8116 121.768L84.5216 122.924C84.5014 123.004 84.4523 123.073 84.3851 123.114C84.3178 123.155 84.238 123.167 84.1631 123.145C84.0882 123.123 84.0243 123.071 83.9856 122.999C83.9469 122.927 83.9365 122.842 83.9566 122.762L84.0952 122.211L83.4403 122.614C83.3732 122.655 83.2937 122.666 83.2191 122.644C83.1446 122.623 83.0811 122.57 83.0425 122.499C83.0039 122.428 82.9933 122.343 83.0131 122.263C83.0328 122.183 83.0813 122.115 83.1479 122.073L83.8028 121.669L83.2859 121.521C83.2488 121.511 83.214 121.492 83.1836 121.467C83.1531 121.442 83.1276 121.411 83.1084 121.375C83.0893 121.34 83.0768 121.301 83.0719 121.26C83.0669 121.219 83.0695 121.178 83.0795 121.138C83.0894 121.098 83.1066 121.061 83.1301 121.029C83.1535 120.996 83.1827 120.969 83.2159 120.948C83.2492 120.928 83.286 120.915 83.3241 120.909C83.3621 120.904 83.4008 120.907 83.4379 120.918L84.5186 121.227L86.5075 120L84.5192 118.773L83.4373 119.082C83.3629 119.102 83.2842 119.09 83.2181 119.048C83.1521 119.007 83.1039 118.939 83.0841 118.86C83.0644 118.781 83.0745 118.696 83.1123 118.625C83.1502 118.554 83.2127 118.501 83.2865 118.479L83.8028 118.331L83.1479 117.927C83.1144 117.907 83.0849 117.879 83.0613 117.847C83.0377 117.814 83.0203 117.777 83.0102 117.737C83.0001 117.697 82.9975 117.656 83.0024 117.615C83.0074 117.574 83.0199 117.535 83.0392 117.499C83.0585 117.463 83.0842 117.432 83.1148 117.407C83.1454 117.382 83.1804 117.364 83.2177 117.353C83.2549 117.343 83.2938 117.34 83.332 117.346C83.3702 117.351 83.407 117.365 83.4403 117.386L84.0952 117.789L83.9566 117.237C83.946 117.198 83.9429 117.156 83.9475 117.115C83.9521 117.073 83.9644 117.034 83.9835 116.998C84.0027 116.962 84.0283 116.93 84.0591 116.905C84.0898 116.879 84.1249 116.861 84.1624 116.85C84.1999 116.839 84.239 116.837 84.2774 116.842C84.3159 116.848 84.3529 116.862 84.3864 116.883C84.4198 116.904 84.449 116.932 84.4722 116.965C84.4954 116.998 84.5122 117.036 84.5216 117.076L84.811 118.232L86.7999 119.459V117.004L86.0087 116.159C85.9815 116.13 85.9599 116.095 85.9452 116.057C85.9305 116.019 85.9229 115.979 85.9228 115.938C85.9228 115.897 85.9304 115.856 85.945 115.818C85.9597 115.78 85.9812 115.746 86.0084 115.717C86.0355 115.688 86.0678 115.664 86.1033 115.649C86.1387 115.633 86.1768 115.625 86.2152 115.625C86.2536 115.625 86.2917 115.633 86.3272 115.649C86.3627 115.664 86.3949 115.687 86.4221 115.716L86.7999 116.121V115.312C86.7999 115.23 86.8307 115.15 86.8855 115.092C86.9404 115.033 87.0147 115 87.0923 115C87.1698 115 87.2442 115.033 87.2991 115.092C87.3539 115.15 87.3847 115.23 87.3847 115.312V116.121L87.7631 115.716C87.818 115.658 87.8924 115.625 87.97 115.625C88.0476 115.625 88.122 115.658 88.1768 115.717C88.2316 115.775 88.2624 115.855 88.2623 115.938C88.2623 116.021 88.2314 116.1 88.1765 116.159L87.3847 117.004V119.459L89.373 118.232L89.663 117.076C89.6832 116.996 89.7323 116.927 89.7995 116.886C89.8668 116.845 89.9466 116.833 90.0215 116.855C90.0964 116.877 90.1603 116.929 90.199 117.001C90.2377 117.073 90.2481 117.158 90.2279 117.238L90.0899 117.789L90.7449 117.386C90.812 117.345 90.8915 117.334 90.966 117.356C91.0405 117.377 91.104 117.43 91.1426 117.501C91.1812 117.572 91.1918 117.657 91.1721 117.737C91.1524 117.817 91.1039 117.885 91.0373 117.927L90.3823 118.331L90.8987 118.479C90.9736 118.5 91.0374 118.553 91.0762 118.625C91.1149 118.696 91.1253 118.782 91.1051 118.862C91.085 118.942 91.0359 119.01 90.9686 119.052C90.9014 119.093 90.8216 119.104 90.7467 119.082L89.666 118.773L87.6771 120L89.6654 121.227L90.7467 120.918C90.8216 120.896 90.9014 120.907 90.9686 120.949C91.0357 120.99 91.0848 121.058 91.1048 121.138C91.1249 121.218 91.1144 121.304 91.0757 121.376C91.0369 121.447 90.973 121.5 90.8981 121.521L90.3817 121.669L91.0367 122.073C91.1033 122.115 91.1518 122.183 91.1715 122.263C91.1913 122.343 91.1807 122.428 91.1421 122.499C91.1035 122.57 91.04 122.623 90.9654 122.644C90.8909 122.666 90.8114 122.655 90.7443 122.614L90.0894 122.211L90.2274 122.762C90.238 122.802 90.2411 122.844 90.2365 122.885C90.2319 122.927 90.2196 122.966 90.2005 123.002C90.1813 123.038 90.1557 123.07 90.125 123.095C90.0942 123.121 90.0591 123.139 90.0216 123.15C89.9841 123.161 89.945 123.163 89.9066 123.158C89.8681 123.152 89.8311 123.138 89.7977 123.117C89.7642 123.096 89.7351 123.068 89.7118 123.035C89.6886 123.002 89.6718 122.964 89.6625 122.924L89.373 121.768L87.3847 120.541V122.996L88.1759 123.841C88.2308 123.9 88.2617 123.979 88.2617 124.062C88.2618 124.145 88.231 124.225 88.1762 124.283C88.1214 124.342 88.047 124.375 87.9694 124.375C87.8918 124.375 87.8174 124.342 87.7625 124.284L87.3841 123.879V124.688C87.3841 124.77 87.3533 124.85 87.2985 124.908C87.2436 124.967 87.1698 125 87.0923 125Z" fill="#5D6DFD"/>\n' +
            '</g>\n' +
            '<g filter="url(#filter7_i_404_330)">\n' +
            '<path d="M73.5015 133C73.4162 133 73.3344 132.967 73.2741 132.908C73.2138 132.85 73.1799 132.77 73.1799 132.688V131.879L72.7643 132.284C72.7039 132.342 72.6221 132.375 72.5367 132.375C72.4514 132.375 72.3695 132.342 72.3092 132.283C72.2489 132.225 72.2151 132.145 72.2151 132.062C72.2152 131.979 72.2492 131.9 72.3095 131.841L73.1799 130.996V128.541L70.9928 129.768L70.6737 130.924C70.6515 131.004 70.5975 131.073 70.5236 131.114C70.4496 131.155 70.3618 131.167 70.2794 131.145C70.197 131.123 70.1268 131.071 70.0842 130.999C70.0416 130.927 70.0301 130.842 70.0523 130.762L70.2048 130.211L69.4843 130.614C69.4105 130.655 69.323 130.666 69.2411 130.644C69.1591 130.623 69.0893 130.57 69.0468 130.499C69.0043 130.428 68.9927 130.343 69.0144 130.263C69.0361 130.183 69.0894 130.115 69.1627 130.073L69.8831 129.669L69.3145 129.521C69.2737 129.511 69.2354 129.492 69.2019 129.467C69.1684 129.442 69.1404 129.411 69.1193 129.375C69.0982 129.34 69.0845 129.301 69.0791 129.26C69.0736 129.219 69.0764 129.178 69.0874 129.138C69.0984 129.098 69.1173 129.061 69.1431 129.029C69.1688 128.996 69.2009 128.969 69.2375 128.948C69.2742 128.928 69.3146 128.915 69.3565 128.909C69.3984 128.904 69.4409 128.907 69.4817 128.918L70.6705 129.227L72.8583 128L70.6711 126.773L69.4811 127.082C69.3992 127.102 69.3126 127.09 69.2399 127.048C69.1673 127.007 69.1143 126.939 69.0926 126.86C69.0708 126.781 69.0819 126.696 69.1236 126.625C69.1652 126.554 69.234 126.501 69.3151 126.479L69.8831 126.331L69.1627 125.927C69.1258 125.907 69.0934 125.879 69.0674 125.847C69.0415 125.814 69.0223 125.777 69.0112 125.737C69.0001 125.697 68.9972 125.656 69.0027 125.615C69.0082 125.574 69.0219 125.535 69.0431 125.499C69.0643 125.463 69.0926 125.432 69.1263 125.407C69.16 125.382 69.1984 125.364 69.2394 125.353C69.2804 125.343 69.3232 125.34 69.3652 125.346C69.4072 125.351 69.4477 125.365 69.4843 125.386L70.2048 125.789L70.0523 125.237C70.0406 125.198 70.0372 125.156 70.0423 125.115C70.0473 125.073 70.0608 125.034 70.0819 124.998C70.1029 124.962 70.1312 124.93 70.165 124.905C70.1987 124.879 70.2374 124.861 70.2786 124.85C70.3199 124.839 70.3629 124.837 70.4052 124.842C70.4475 124.848 70.4882 124.862 70.525 124.883C70.5618 124.904 70.5938 124.932 70.6194 124.965C70.6449 124.998 70.6634 125.036 70.6737 125.076L70.9921 126.232L73.1799 127.459V125.004L72.3095 124.159C72.2796 124.13 72.2559 124.095 72.2397 124.057C72.2235 124.019 72.2152 123.979 72.2151 123.938C72.2151 123.897 72.2234 123.856 72.2395 123.818C72.2557 123.78 72.2794 123.746 72.3092 123.717C72.3391 123.688 72.3745 123.664 72.4136 123.649C72.4526 123.633 72.4945 123.625 72.5367 123.625C72.579 123.625 72.6208 123.633 72.6599 123.649C72.6989 123.664 72.7344 123.687 72.7643 123.716L73.1799 124.121V123.312C73.1799 123.23 73.2138 123.15 73.2741 123.092C73.3344 123.033 73.4162 123 73.5015 123C73.5868 123 73.6686 123.033 73.729 123.092C73.7893 123.15 73.8232 123.23 73.8232 123.312V124.121L74.2394 123.716C74.2998 123.658 74.3816 123.625 74.467 123.625C74.5523 123.625 74.6342 123.658 74.6945 123.717C74.7548 123.775 74.7886 123.855 74.7886 123.938C74.7885 124.021 74.7545 124.1 74.6941 124.159L73.8232 125.004V127.459L76.0103 126.232L76.3293 125.076C76.3515 124.996 76.4055 124.927 76.4795 124.886C76.5534 124.845 76.6413 124.833 76.7237 124.855C76.8061 124.877 76.8763 124.929 76.9189 125.001C76.9615 125.073 76.9729 125.158 76.9507 125.238L76.7989 125.789L77.5194 125.386C77.5932 125.345 77.6807 125.334 77.7626 125.356C77.8446 125.377 77.9144 125.43 77.9569 125.501C77.9994 125.572 78.011 125.657 77.9893 125.737C77.9676 125.817 77.9143 125.885 77.841 125.927L77.1206 126.331L77.6886 126.479C77.771 126.5 77.8412 126.553 77.8838 126.625C77.9264 126.696 77.9378 126.782 77.9156 126.862C77.8935 126.942 77.8395 127.01 77.7655 127.052C77.6916 127.093 77.6037 127.104 77.5213 127.082L76.3326 126.773L74.1448 128L76.3319 129.227L77.5213 128.918C77.6037 128.896 77.6915 128.907 77.7654 128.949C77.8393 128.99 77.8932 129.058 77.9153 129.138C77.9374 129.218 77.9259 129.304 77.8832 129.376C77.8406 129.447 77.7703 129.5 77.6879 129.521L77.1199 129.669L77.8404 130.073C77.9137 130.115 77.967 130.183 77.9887 130.263C78.0104 130.343 77.9987 130.428 77.9563 130.499C77.9138 130.57 77.844 130.623 77.762 130.644C77.68 130.666 77.5926 130.655 77.5188 130.614L76.7983 130.211L76.9501 130.762C76.9618 130.802 76.9652 130.844 76.9601 130.885C76.9551 130.927 76.9416 130.966 76.9205 131.002C76.8995 131.038 76.8712 131.07 76.8374 131.095C76.8037 131.121 76.765 131.139 76.7238 131.15C76.6825 131.161 76.6395 131.163 76.5972 131.158C76.5549 131.152 76.5142 131.138 76.4774 131.117C76.4406 131.096 76.4086 131.068 76.383 131.035C76.3575 131.002 76.339 130.964 76.3287 130.924L76.0103 129.768L73.8232 128.541V130.996L74.6935 131.841C74.7539 131.9 74.7879 131.979 74.7879 132.062C74.788 132.145 74.7541 132.225 74.6938 132.283C74.6335 132.342 74.5517 132.375 74.4663 132.375C74.381 132.375 74.2991 132.342 74.2387 132.284L73.8225 131.879V132.688C73.8225 132.77 73.7886 132.85 73.7283 132.908C73.668 132.967 73.5868 133 73.5015 133Z" fill="#5D6DFD"/>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<filter id="filter0_f_404_330" x="0.716675" y="0.306396" width="159.773" height="164.807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_404_330"/>\n' +
            '</filter>\n' +
            '<filter id="filter1_i_404_330" x="51.5" y="63.5" width="14.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_330"/>\n' +
            '</filter>\n' +
            '<filter id="filter2_i_404_330" x="41" y="72.5" width="66" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_330"/>\n' +
            '</filter>\n' +
            '<filter id="filter3_i_404_330" x="70.5" y="56" width="44" height="36.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="11"/>\n' +
            '<feGaussianBlur stdDeviation="5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_330"/>\n' +
            '</filter>\n' +
            '<filter id="filter4_i_404_330" x="55.7899" y="57.1802" width="24.2694" height="29.509" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="4"/>\n' +
            '<feGaussianBlur stdDeviation="4"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_330"/>\n' +
            '</filter>\n' +
            '<filter id="filter5_i_404_330" x="56" y="115" width="8.57141" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_330"/>\n' +
            '</filter>\n' +
            '<filter id="filter6_i_404_330" x="83" y="115" width="8.18176" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_330"/>\n' +
            '</filter>\n' +
            '<filter id="filter7_i_404_330" x="69" y="123" width="9" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
            '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
            '<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n' +
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
            '<feOffset dy="9"/>\n' +
            '<feGaussianBlur stdDeviation="1.5"/>\n' +
            '<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n' +
            '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"/>\n' +
            '<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_330"/>\n' +
            '</filter>\n' +
            '<linearGradient id="paint0_linear_404_330" x1="52.4223" y1="71.6964" x2="67.5118" y2="60.9041" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint1_linear_404_330" x1="45.1979" y1="108.018" x2="111.56" y2="58.1619" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint2_linear_404_330" x1="111.701" y1="80.1339" x2="66.8549" y2="47.0779" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="white" stop-opacity="0.65"/>\n' +
            '<stop offset="1" stop-color="white" stop-opacity="0.58"/>\n' +
            '</linearGradient>\n' +
            '<linearGradient id="paint3_linear_404_330" x1="81.4051" y1="52.7298" x2="71.5931" y2="112.142" gradientUnits="userSpaceOnUse">\n' +
            '<stop stop-color="#FFEE94"/>\n' +
            '<stop offset="1" stop-color="#FF9900"/>\n' +
            '</linearGradient>\n' +
            '</defs>\n' +
            '</svg>\n',
        spinner: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Type=spinner-gap-regular">\n' +
            '<path id="Vector" d="M17 4V8C17 8.26522 16.8946 8.51957 16.7071 8.70711C16.5196 8.89464 16.2652 9 16 9C15.7348 9 15.4804 8.89464 15.2929 8.70711C15.1054 8.51957 15 8.26522 15 8V4C15 3.73478 15.1054 3.48043 15.2929 3.29289C15.4804 3.10536 15.7348 3 16 3C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4ZM28 15H24C23.7348 15 23.4804 15.1054 23.2929 15.2929C23.1054 15.4804 23 15.7348 23 16C23 16.2652 23.1054 16.5196 23.2929 16.7071C23.4804 16.8946 23.7348 17 24 17H28C28.2652 17 28.5196 16.8946 28.7071 16.7071C28.8946 16.5196 29 16.2652 29 16C29 15.7348 28.8946 15.4804 28.7071 15.2929C28.5196 15.1054 28.2652 15 28 15ZM22.3638 20.95C22.1747 20.7704 21.9229 20.6717 21.6622 20.6751C21.4014 20.6784 21.1523 20.7835 20.9679 20.9679C20.7835 21.1523 20.6784 21.4014 20.6751 21.6622C20.6717 21.9229 20.7704 22.1747 20.95 22.3638L23.7775 25.1925C23.9651 25.3801 24.2196 25.4856 24.485 25.4856C24.7504 25.4856 25.0049 25.3801 25.1925 25.1925C25.3801 25.0049 25.4856 24.7504 25.4856 24.485C25.4856 24.2196 25.3801 23.9651 25.1925 23.7775L22.3638 20.95ZM16 23C15.7348 23 15.4804 23.1054 15.2929 23.2929C15.1054 23.4804 15 23.7348 15 24V28C15 28.2652 15.1054 28.5196 15.2929 28.7071C15.4804 28.8946 15.7348 29 16 29C16.2652 29 16.5196 28.8946 16.7071 28.7071C16.8946 28.5196 17 28.2652 17 28V24C17 23.7348 16.8946 23.4804 16.7071 23.2929C16.5196 23.1054 16.2652 23 16 23ZM9.63625 20.95L6.8075 23.7775C6.61986 23.9651 6.51444 24.2196 6.51444 24.485C6.51444 24.7504 6.61986 25.0049 6.8075 25.1925C6.99514 25.3801 7.24964 25.4856 7.515 25.4856C7.78036 25.4856 8.03486 25.3801 8.2225 25.1925L11.05 22.3638C11.2296 22.1747 11.3283 21.9229 11.3249 21.6622C11.3216 21.4014 11.2165 21.1523 11.0321 20.9679C10.8477 20.7835 10.5986 20.6784 10.3378 20.6751C10.0771 20.6717 9.82531 20.7704 9.63625 20.95ZM9 16C9 15.7348 8.89464 15.4804 8.70711 15.2929C8.51957 15.1054 8.26522 15 8 15H4C3.73478 15 3.48043 15.1054 3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16C3 16.2652 3.10536 16.5196 3.29289 16.7071C3.48043 16.8946 3.73478 17 4 17H8C8.26522 17 8.51957 16.8946 8.70711 16.7071C8.89464 16.5196 9 16.2652 9 16ZM8.2225 6.8075C8.03486 6.61986 7.78036 6.51444 7.515 6.51444C7.24964 6.51444 6.99514 6.61986 6.8075 6.8075C6.61986 6.99514 6.51444 7.24964 6.51444 7.515C6.51444 7.78036 6.61986 8.03486 6.8075 8.2225L9.63625 11.05C9.82531 11.2296 10.0771 11.3283 10.3378 11.3249C10.5986 11.3216 10.8477 11.2165 11.0321 11.0321C11.2165 10.8477 11.3216 10.5986 11.3249 10.3378C11.3283 10.0771 11.2296 9.82531 11.05 9.63625L8.2225 6.8075Z" fill="white"/>\n' +
            '</g>\n' +
            '</svg>\n',
        logo: '<svg width="171" height="24" viewBox="0 0 171 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Logo">\n' +
            '<g id="Vector">\n' +
            '<path id="Vector_2" d="M27.5002 24C26.2006 24 25.3999 23.4 24.0917 22.6934C22.7835 21.9867 18.9999 19.1416 18.9999 15.6C18.9999 13.1975 18.3806 11.2543 17.3259 9.70568C16.279 8.16896 14.8608 7.10428 13.3855 6.35272C12.6745 5.99064 11.9347 5.69452 11.198 5.4498C10.7685 5.30724 10.5192 4.84608 10.7056 4.4338C11.8866 1.81916 14.5169 0 17.5724 0C21.7316 0 25.1034 3.37168 25.1034 7.53104C25.1034 8.42088 24.9491 9.2748 24.6657 10.0672C25.8662 9.2582 27.3126 8.78612 28.869 8.78612C33.0282 8.78612 36.3998 12.1578 36.3998 16.3172C36.3998 21.3244 31.9998 24 27.5002 24Z" fill="#8FB2F5"/>\n' +
            '<path id="Vector_3" d="M0 15.6896C0 19.6593 2.6172 22.967 6.08436 23.6978C6.61952 23.8933 7.19728 24 7.8 24H19.501C19.8934 24 20.0642 23.4752 19.7646 23.2216C17.7197 21.4914 16.2 19.0529 16.2 15.6C16.2 13.7027 15.7195 12.3208 15.0117 11.282C14.2959 10.2312 13.2891 9.44585 12.1146 8.84745C10.9293 8.24373 9.6424 7.85913 8.41348 7.58649C8.12404 7.54997 7.82948 7.53101 7.53104 7.53101C3.37168 7.53101 0 11.1838 0 15.6896Z" fill="#8FB2F5"/>\n' +
            '</g>\n' +
            '<g id="Type">\n' +
            '<g id="Type Weather">\n' +
            '<path d="M95.6414 18.6241L91.5998 4.80005H94.0286L96.7838 14.784L99.5294 4.81925L101.958 4.80005L104.713 14.784L107.459 4.80005H109.888L105.856 18.6241H103.571L100.739 8.79365L97.9262 18.6241H95.6414Z" fill="#FAFAFA"/>\n' +
            '<path d="M115.024 18.912C113.974 18.912 113.053 18.6849 112.259 18.2305C111.466 17.7761 110.845 17.1457 110.397 16.3393C109.955 15.5329 109.734 14.6049 109.734 13.5553C109.734 12.4225 109.952 11.44 110.387 10.608C110.822 9.76965 111.427 9.12005 112.202 8.65925C112.976 8.19845 113.872 7.96805 114.89 7.96805C115.965 7.96805 116.877 8.22085 117.626 8.72645C118.381 9.22565 118.941 9.93285 119.306 10.8481C119.67 11.7633 119.808 12.8416 119.718 14.0832H117.424V13.2384C117.418 12.112 117.219 11.2896 116.829 10.7712C116.438 10.2528 115.824 9.99365 114.986 9.99365C114.038 9.99365 113.334 10.288 112.874 10.8768C112.413 11.4592 112.182 12.3137 112.182 13.4401C112.182 14.4896 112.413 15.3024 112.874 15.8784C113.334 16.4544 114.006 16.7424 114.89 16.7424C115.459 16.7424 115.949 16.6176 116.358 16.368C116.774 16.112 117.094 15.7441 117.318 15.2641L119.603 15.9552C119.206 16.8896 118.592 17.616 117.76 18.1344C116.934 18.6528 116.022 18.912 115.024 18.912ZM111.453 14.0832V12.3361H118.586V14.0832H111.453Z" fill="#FAFAFA"/>\n' +
            '<path d="M124.572 18.912C123.823 18.912 123.19 18.7713 122.671 18.4897C122.153 18.2017 121.759 17.8209 121.491 17.3473C121.228 16.8737 121.097 16.352 121.097 15.7824C121.097 15.2832 121.18 14.8352 121.347 14.4384C121.513 14.0352 121.769 13.6896 122.115 13.4016C122.46 13.1072 122.908 12.8673 123.459 12.6817C123.875 12.5472 124.361 12.4256 124.918 12.3168C125.481 12.208 126.089 12.1089 126.742 12.0192C127.401 11.9233 128.089 11.8208 128.806 11.712L127.98 12.1824C127.987 11.4656 127.827 10.9376 127.5 10.5984C127.174 10.2592 126.623 10.0897 125.849 10.0897C125.382 10.0897 124.931 10.1984 124.495 10.416C124.06 10.6336 123.756 11.0081 123.583 11.5393L121.471 10.8768C121.727 10 122.214 9.29605 122.931 8.76485C123.654 8.23365 124.627 7.96805 125.849 7.96805C126.771 7.96805 127.58 8.11845 128.278 8.41925C128.982 8.72005 129.503 9.21285 129.843 9.89765C130.028 10.2625 130.14 10.6368 130.179 11.0208C130.217 11.3984 130.236 11.8112 130.236 12.2592V18.6241H128.211V16.3777L128.547 16.7424C128.079 17.4912 127.532 18.0417 126.905 18.3937C126.284 18.7393 125.507 18.912 124.572 18.912ZM125.033 17.0689C125.558 17.0689 126.006 16.9761 126.377 16.7905C126.748 16.6048 127.043 16.3776 127.26 16.1088C127.484 15.84 127.635 15.5872 127.711 15.3504C127.833 15.056 127.9 14.72 127.913 14.3424C127.932 13.9584 127.942 13.6481 127.942 13.4113L128.652 13.6225C127.955 13.7313 127.356 13.8273 126.857 13.9104C126.358 13.9937 125.929 14.0736 125.571 14.1504C125.212 14.2208 124.895 14.3008 124.62 14.3904C124.351 14.4865 124.124 14.5984 123.939 14.7264C123.753 14.8544 123.609 15.0016 123.507 15.168C123.411 15.3344 123.363 15.5296 123.363 15.7536C123.363 16.0096 123.427 16.2369 123.555 16.4353C123.683 16.6273 123.868 16.7808 124.111 16.896C124.361 17.0112 124.668 17.0689 125.033 17.0689Z" fill="#FAFAFA"/>\n' +
            '<path d="M138.812 18.6241C138.127 18.7521 137.455 18.8064 136.796 18.7872C136.143 18.7744 135.558 18.656 135.039 18.432C134.521 18.2016 134.127 17.8401 133.859 17.3473C133.622 16.8993 133.497 16.4416 133.484 15.9744C133.471 15.5072 133.465 14.9792 133.465 14.3904V5.37605H135.769V14.2561C135.769 14.6721 135.772 15.0368 135.779 15.3504C135.791 15.664 135.859 15.9201 135.98 16.1185C136.211 16.5025 136.579 16.7168 137.084 16.7617C137.59 16.8064 138.166 16.7809 138.812 16.6849V18.6241ZM131.583 10.0704V8.25605H138.812V10.0704H131.583Z" fill="#FAFAFA"/>\n' +
            '<path d="M148.213 18.6241V13.632C148.213 13.3056 148.191 12.9441 148.146 12.5473C148.101 12.1505 147.995 11.7696 147.829 11.4048C147.669 11.0336 147.426 10.7296 147.099 10.4928C146.779 10.256 146.344 10.1376 145.794 10.1376C145.499 10.1376 145.208 10.1856 144.92 10.2817C144.632 10.3776 144.37 10.5441 144.133 10.7809C143.903 11.0113 143.717 11.3312 143.576 11.7408C143.435 12.144 143.365 12.6624 143.365 13.296L141.992 12.7104C141.992 11.8272 142.162 11.0272 142.501 10.3104C142.847 9.59365 143.352 9.02405 144.018 8.60165C144.683 8.17285 145.503 7.95845 146.475 7.95845C147.243 7.95845 147.877 8.08645 148.376 8.34245C148.875 8.59845 149.272 8.92485 149.567 9.32165C149.861 9.71845 150.079 10.1409 150.219 10.5889C150.36 11.0369 150.45 11.4625 150.488 11.8656C150.533 12.2624 150.555 12.5856 150.555 12.8352V18.6241H148.213ZM141.023 18.6241V4.80005H143.087V12.0768H143.365V18.6241H141.023Z" fill="#FAFAFA"/>\n' +
            '<path d="M157.774 18.912C156.724 18.912 155.803 18.6849 155.009 18.2305C154.216 17.7761 153.595 17.1457 153.147 16.3393C152.705 15.5329 152.484 14.6049 152.484 13.5553C152.484 12.4225 152.702 11.44 153.137 10.608C153.572 9.76965 154.177 9.12005 154.952 8.65925C155.726 8.19845 156.622 7.96805 157.64 7.96805C158.715 7.96805 159.627 8.22085 160.376 8.72645C161.131 9.22565 161.691 9.93285 162.056 10.8481C162.42 11.7633 162.558 12.8416 162.468 14.0832H160.174V13.2384C160.168 12.112 159.969 11.2896 159.579 10.7712C159.188 10.2528 158.574 9.99365 157.736 9.99365C156.788 9.99365 156.084 10.288 155.624 10.8768C155.163 11.4592 154.932 12.3137 154.932 13.4401C154.932 14.4896 155.163 15.3024 155.624 15.8784C156.084 16.4544 156.756 16.7424 157.64 16.7424C158.209 16.7424 158.699 16.6176 159.108 16.368C159.524 16.112 159.844 15.7441 160.068 15.2641L162.353 15.9552C161.956 16.8896 161.342 17.616 160.51 18.1344C159.684 18.6528 158.772 18.912 157.774 18.912ZM154.203 14.0832V12.3361H161.336V14.0832H154.203Z" fill="#FAFAFA"/>\n' +
            '<path d="M164.61 18.6241V8.25605H166.655V10.7809L166.406 10.4544C166.534 10.1088 166.703 9.79525 166.914 9.51365C167.132 9.22565 167.391 8.98885 167.692 8.80325C167.948 8.63045 168.23 8.49605 168.537 8.40005C168.85 8.29765 169.17 8.23685 169.497 8.21765C169.823 8.19205 170.14 8.20485 170.447 8.25605V10.416C170.14 10.3264 169.785 10.2976 169.382 10.3296C168.985 10.3616 168.626 10.4736 168.306 10.6656C167.986 10.8384 167.724 11.0592 167.519 11.328C167.321 11.5968 167.174 11.904 167.078 12.2496C166.982 12.5888 166.934 12.9569 166.934 13.3536V18.6241H164.61Z" fill="#FAFAFA"/>\n' +
            '</g>\n' +
            '<g id="Type Weather_2">\n' +
            '<path d="M50.4733 18.624V6.96965H45.9997V4.80005H57.2605V6.96965H52.7869V18.624H50.4733Z" fill="#FAFAFA"/>\n' +
            '<path d="M58.8086 23.232L60.8054 17.7504L60.8438 19.3632L56.3222 8.25605H58.7318L61.9382 16.4736H61.3238L64.4438 8.25605H66.7574L60.9782 23.232H58.8086Z" fill="#FAFAFA"/>\n' +
            '<path d="M73.1716 18.912C72.1604 18.912 71.3124 18.672 70.6276 18.192C69.9428 17.712 69.4276 17.0592 69.082 16.2336C68.7364 15.4016 68.5636 14.4704 68.5636 13.44C68.5636 12.3968 68.7364 11.4624 69.082 10.6368C69.4276 9.81125 69.9332 9.16165 70.5988 8.68805C71.2708 8.20805 72.0996 7.96805 73.0852 7.96805C74.0644 7.96805 74.9124 8.20805 75.6292 8.68805C76.3524 9.16165 76.9124 9.81125 77.3092 10.6368C77.706 11.456 77.9044 12.3904 77.9044 13.44C77.9044 14.4768 77.7092 15.408 77.3188 16.2336C76.9284 17.0592 76.378 17.712 75.6676 18.192C74.9572 18.672 74.1252 18.912 73.1716 18.912ZM68.17 23.232V8.25605H70.2148V15.5328H70.5028V23.232H68.17ZM72.8164 16.8384C73.418 16.8384 73.914 16.688 74.3044 16.3872C74.6948 16.0864 74.9828 15.68 75.1684 15.168C75.3604 14.6496 75.4564 14.0736 75.4564 13.44C75.4564 12.8128 75.3604 12.2432 75.1684 11.7312C74.9764 11.2128 74.6788 10.8032 74.2756 10.5024C73.8724 10.1952 73.3604 10.0416 72.7396 10.0416C72.1508 10.0416 71.6708 10.1856 71.2996 10.4736C70.9284 10.7552 70.6532 11.152 70.474 11.664C70.3012 12.1696 70.2148 12.7616 70.2148 13.44C70.2148 14.112 70.3012 14.704 70.474 15.216C70.6532 15.728 70.9316 16.128 71.3092 16.416C71.6932 16.6976 72.1956 16.8384 72.8164 16.8384Z" fill="#FAFAFA"/>\n' +
            '<path d="M84.734 18.912C83.6844 18.912 82.7628 18.6848 81.9692 18.2304C81.1756 17.776 80.5548 17.1456 80.1068 16.3392C79.6652 15.5328 79.4444 14.6048 79.4444 13.5552C79.4444 12.4224 79.662 11.44 80.0972 10.608C80.5324 9.76965 81.1372 9.12005 81.9116 8.65925C82.686 8.19845 83.582 7.96805 84.5996 7.96805C85.6748 7.96805 86.5868 8.22085 87.3356 8.72645C88.0908 9.22565 88.6508 9.93285 89.0156 10.848C89.3804 11.7632 89.518 12.8416 89.4284 14.0832H87.134V13.2384C87.1276 12.112 86.9292 11.2896 86.5388 10.7712C86.1484 10.2528 85.534 9.99365 84.6956 9.99365C83.7484 9.99365 83.0444 10.288 82.5836 10.8768C82.1228 11.4592 81.8924 12.3136 81.8924 13.44C81.8924 14.4896 82.1228 15.3024 82.5836 15.8784C83.0444 16.4544 83.7164 16.7424 84.5996 16.7424C85.1692 16.7424 85.6588 16.6176 86.0684 16.368C86.4844 16.112 86.8044 15.744 87.0284 15.264L89.3132 15.9552C88.9164 16.8896 88.302 17.616 87.47 18.1344C86.6444 18.6528 85.7324 18.912 84.734 18.912ZM81.1628 14.0832V12.336H88.2956V14.0832H81.1628Z" fill="#FAFAFA"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '</g>\n' +
            '</svg>\n',
        logoSm: '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g id="Logo">\n' +
            '<g id="Vector">\n' +
            '<path id="Vector_2" d="M18.132 15.8243C17.2752 15.8243 16.7473 15.4286 15.8847 14.9627C15.0221 14.4968 12.5275 12.6209 12.5275 10.2858C12.5275 8.70168 12.1191 7.42044 11.4237 6.39938C10.7335 5.38615 9.79838 4.68416 8.82561 4.18863C8.35684 3.94989 7.86903 3.75465 7.38328 3.59329C7.10011 3.4993 6.93577 3.19523 7.05865 2.9234C7.83736 1.19945 9.57162 0 11.5862 0C14.3285 0 16.5518 2.2231 16.5518 4.96554C16.5518 5.55225 16.45 6.11528 16.2632 6.63775C17.0547 6.10434 18.0083 5.79307 19.0345 5.79307C21.7769 5.79307 23.9999 8.01617 23.9999 10.7586C23.9999 14.0601 21.0988 15.8243 18.132 15.8243Z" fill="#8FB2F5"/>\n' +
            '<path id="Vector_3" d="M0 10.3449C0 12.9623 1.72564 15.1432 4.01169 15.6251C4.36454 15.754 4.74548 15.8243 5.14288 15.8243H12.8578C13.1166 15.8243 13.2292 15.4783 13.0317 15.3111C11.6834 14.1703 10.6814 12.5625 10.6814 10.2858C10.6814 9.03484 10.3646 8.12373 9.89789 7.43878C9.4259 6.74594 8.76207 6.22811 7.98771 5.83356C7.20615 5.4355 6.35766 5.18192 5.54738 5.00216C5.35654 4.97808 5.16232 4.96558 4.96555 4.96558C2.2231 4.96558 0 7.374 0 10.3449Z" fill="#8FB2F5"/>\n' +
            '</g>\n' +
            '</g>\n' +
            '</svg>\n',
        searchButton: '<?xml version="1.0"?>' +
            '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">' +
            '<path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>',
    }

    constructor(private sanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) {
        this.changeDetector.detach();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['icon']) {
            if (this.icons[this.icon] != null) {
                this.changeDetector.reattach();
                this.selectedSvg = this.sanitizer.bypassSecurityTrustHtml(this.icons[this.icon]);
                this.changeDetector.detectChanges();
                this.changeDetector.detach();
            }
        }
    }
}
