import { getAppName } from '@proton/shared/lib/apps/helper';
import { APPS } from '@proton/shared/lib/constants';

interface Props {
    className?: string;
}
const DriveLogo = ({ className = 'logo' }: Props) => {
    const appName = getAppName(APPS.PROTONDRIVE);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 148 22"
            className={className}
            aria-labelledby="logo__title"
        >
            <g>
                <path d="M112.826 3.405c.321-.32.729-.475 1.202-.475.483 0 .9.153 1.222.475.318.318.475.718.475 1.18 0 .46-.157.861-.475 1.18l-.006.005c-.323.305-.738.448-1.216.448-.468 0-.874-.145-1.195-.448l-.007-.006a1.611 1.611 0 01-.474-1.18c0-.46.156-.861.474-1.18z" />
                <path d="M25.85 4.887h4.191c1.872 0 3.365.394 4.44 1.222 1.093.829 1.622 2.066 1.622 3.657 0 1.69-.55 2.993-1.689 3.852-1.112.838-2.573 1.243-4.351 1.243h-1.57v5.44H25.85V4.886zm2.642 2.19v5.571h1.485c1.158 0 1.987-.224 2.53-.629l.003-.002c.518-.377.822-1.084.822-2.23 0-1.001-.295-1.662-.826-2.06l-.003-.002c-.543-.417-1.357-.647-2.483-.647h-1.527zM94.263 4.887h-3.396V20.3h3.847c1.997 0 3.709-.579 5.115-1.746 1.461-1.215 2.151-3.258 2.151-6.036 0-2.842-.687-4.883-2.16-6-1.414-1.098-3.276-1.631-5.557-1.631zm-.754 13.2V7.122h1.205c.902 0 1.67.138 2.314.406l.005.002c.604.24 1.123.737 1.544 1.538v.002c.411.768.632 1.907.632 3.45 0 2.202-.43 3.629-1.2 4.386-.796.783-1.835 1.183-3.144 1.183h-1.356z" />
                <path d="M61.039 5.537V8.37h2.733l-.3 2.126h-2.433v6.451c0 .559.096.908.237 1.105.137.16.384.272.817.272.378 0 .83-.129 1.363-.416l.257-.138 1.035 1.804-.226.157c-.798.552-1.704.827-2.708.827-1.02 0-1.856-.29-2.47-.905l-.005-.005c-.6-.633-.878-1.52-.878-2.615v-6.537h-1.978V8.37h1.978V5.845l2.578-.308zM43.136 8.112c-.756 0-1.427.238-1.998.714a3.837 3.837 0 00-.83.991l-.121-1.447h-2.274V20.3h2.578v-6.738c.238-1.053.559-1.791.94-2.25.37-.444.85-.665 1.469-.665.288 0 .593.039.916.12l.308.077.477-2.526-.274-.068a4.9 4.9 0 00-1.19-.138z" />
                <path d="M47.439 8.913c.816-.539 1.785-.801 2.894-.801 1.665 0 2.988.558 3.929 1.699.946 1.13 1.402 2.645 1.402 4.513 0 1.21-.206 2.292-.628 3.24v.001c-.423.936-1.04 1.677-1.85 2.212l-.003.003c-.816.523-1.777.778-2.871.778-1.665 0-2.995-.559-3.95-1.698-.946-1.13-1.403-2.646-1.403-4.514 0-1.21.206-2.285.628-3.219.423-.95 1.04-1.693 1.852-2.214zm.933 2.344c-.441.65-.684 1.665-.684 3.089 0 1.416.24 2.425.68 3.073.423.626 1.054.948 1.944.948.888 0 1.52-.323 1.944-.953.438-.652.68-1.667.68-3.09 0-1.416-.24-2.426-.675-3.074-.42-.627-1.047-.947-1.928-.947-.896 0-1.533.323-1.96.954zM70.657 8.112c-1.108 0-2.078.262-2.894.8-.812.522-1.429 1.265-1.852 2.215-.421.934-.628 2.01-.628 3.219 0 1.868.457 3.384 1.403 4.514.955 1.139 2.285 1.698 3.95 1.698 1.094 0 2.056-.255 2.87-.778l.004-.003c.81-.535 1.427-1.276 1.85-2.212v-.002c.422-.947.628-2.03.628-3.239 0-1.868-.456-3.383-1.402-4.513-.94-1.14-2.264-1.7-3.929-1.7zm3.93 1.699l-.232.191.23-.192h.001zm-6.824-.898h-.002l.166.251-.162-.252h-.002zm.249 5.433c0-1.424.243-2.438.684-3.09.428-.63 1.065-.953 1.961-.953.881 0 1.507.32 1.928.947.435.648.675 1.658.675 3.074 0 1.424-.241 2.438-.68 3.09-.424.63-1.056.953-1.944.953-.89 0-1.52-.322-1.945-.948-.438-.648-.68-1.657-.68-3.073z" />
                <path d="M81.731 8.667a4.217 4.217 0 012.127-.555c1.094 0 1.984.329 2.626 1.018.653.686.964 1.613.964 2.743V20.3H84.87v-8.147c0-.782-.15-1.252-.374-1.497-.227-.249-.58-.396-1.111-.396a2.28 2.28 0 00-1.411.456c-.405.303-.796.743-1.17 1.33V20.3h-2.578V8.37h2.27l.123 1.203c.325-.36.695-.662 1.11-.904l.002-.002zM109.755 8.112c-.757 0-1.427.238-1.998.714a3.833 3.833 0 00-.83.991l-.122-1.447h-2.274V20.3h2.578v-6.738c.239-1.053.559-1.791.941-2.25.37-.444.85-.665 1.468-.665.288 0 .593.039.916.12l.309.077.477-2.526-.275-.068a4.895 4.895 0 00-1.19-.138z" />
                <path d="M130.698 8.942c.772-.556 1.673-.83 2.69-.83 1.578 0 2.825.522 3.695 1.594.86 1.06 1.271 2.504 1.271 4.296 0 .338-.015.683-.044 1.035l-.023.275h-7.173c.113 1.043.404 1.779.839 2.248.483.522 1.104.786 1.887.786.515 0 .984-.075 1.407-.22a5.77 5.77 0 001.369-.717l.24-.165 1.202 1.652-.227.179c-1.253.984-2.636 1.483-4.142 1.483-1.648 0-2.97-.543-3.925-1.652l-.001-.002c-.934-1.102-1.383-2.598-1.383-4.45 0-1.208.191-2.287.582-3.233l.001-.002c.405-.96.98-1.723 1.732-2.275l.003-.002zm.413 4.308h4.685c-.022-.996-.236-1.72-.604-2.207-.376-.496-.944-.762-1.761-.762-.725 0-1.256.26-1.634.77-.355.48-.593 1.201-.686 2.2z" />
                <path d="M115.338 8.37h-2.578V20.3h2.578V8.37zM116.815 8.37h2.792l2.745 8.85 2.725-8.85h2.726L123.75 20.3h-2.815l-4.12-11.93zM14.87 6.335a4.399 4.399 0 01.19 8.794v.004h-3.2v2.023h2.256L10.1 21.17l-4.016-4.015h2.323v-2.023h3.419V13.11h2.322l-4.016-4.015L6.12 13.11h2.255v2.023H5.292a4.29 4.29 0 01-.339-8.568 5.18 5.18 0 019.764-.227c.05-.003.101-.003.152-.003z" />
            </g>
            <title id="logo__title">{appName}</title>
        </svg>
    );
};

export default DriveLogo;
