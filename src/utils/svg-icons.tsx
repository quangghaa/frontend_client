import React from "react"
import logo from "../assets/logo.png"

function Logo() {
    return (
        <img src={logo} alt="aragon" className="logo" />
    )

}

function Setting() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M18.964 10.504c.236.04.46.156.672.347a.91.91 0 01.316.702v.988a.782.782 0 01-.316.648 1.835 1.835 0 01-.672.34l-1.281.309c-.05.148-.104.295-.163.44-.056.14-.12.276-.192.409l.678 1.142c.134.206.216.443.248.71a.808.808 0 01-.248.695l-.694.695a.894.894 0 01-.71.27 1.455 1.455 0 01-.726-.224l-1.111-.71c-.143.07-.287.137-.433.2a4.829 4.829 0 01-.463.17l-.278 1.282a1.36 1.36 0 01-.347.672.909.909 0 01-.702.316h-.989a.782.782 0 01-.648-.316 1.844 1.844 0 01-.34-.672l-.31-1.268a6.31 6.31 0 01-.494-.177 5.081 5.081 0 01-.478-.224l-1.142.726c-.214.14-.463.217-.718.224a.857.857 0 01-.703-.27l-.71-.696a.827.827 0 01-.232-.693c.031-.268.108-.505.232-.71l.726-1.205a8.456 8.456 0 01-.178-.379 3.19 3.19 0 01-.147-.409l-1.28-.308a1.843 1.843 0 01-.673-.34.783.783 0 01-.316-.648v-.988c0-.278.105-.513.316-.702.21-.191.435-.306.673-.348l1.264-.278c.043-.148.094-.292.155-.432.062-.144.123-.283.186-.417L6.01 8.171a1.754 1.754 0 01-.232-.71.827.827 0 01.232-.695l.71-.695a.857.857 0 01.703-.27c.282.015.522.09.716.224l1.144.726c.306-.163.626-.297.957-.401l.325-1.267c.055-.246.166-.475.323-.672a.802.802 0 01.664-.316h.989c.277 0 .509.106.694.316.186.211.304.43.355.657l.279 1.296c.307.103.606.227.896.371l1.11-.71c.218-.137.468-.214.725-.223a.893.893 0 01.71.27l.696.695a.807.807 0 01.247.693 1.625 1.625 0 01-.248.71l-.678 1.143c.071.144.14.291.208.44.067.15.12.306.162.47l1.265.279.002.002zm0 1.96l.015-.88a.543.543 0 00-.216-.108l-1.837-.418-.17-.54a2.615 2.615 0 00-.123-.37 4.37 4.37 0 00-.185-.386l-.248-.494.973-1.621a.5.5 0 00.07-.123.3.3 0 00.022-.093l-.648-.632a.367.367 0 00-.2.06l-1.591 1.02-.51-.264c-.122-.06-.245-.12-.37-.177a2.006 2.006 0 00-.385-.13l-.54-.186-.402-1.867a.457.457 0 00-.047-.116l-.031-.054h-.91a.357.357 0 00-.062.092.546.546 0 00-.046.155l-.448 1.791-.525.169a4.756 4.756 0 00-.803.34l-.51.263-1.65-1.051-.079-.038a.706.706 0 00-.093-.04l-.648.65a.33.33 0 00.023.108c.02.048.043.094.07.139L7.863 9.33l-.246.478c-.057.123-.111.246-.163.37a2.936 2.936 0 00-.115.34l-.17.54-1.868.418a.562.562 0 00-.1.046.21.21 0 01-.07.032v.91a.272.272 0 00.092.054c.05.018.103.03.155.038l1.807.464.168.524c.07.226.164.443.28.649l.231.478-1.004 1.683a.5.5 0 00-.07.123.314.314 0 00-.023.109l.648.632a.25.25 0 00.102-.023.623.623 0 00.1-.053l1.62-1.035.51.263c.257.137.525.251.803.34l.525.168.463 1.823c.01.05.024.095.038.13a.28.28 0 00.054.085h.896a.542.542 0 00.108-.2l.401-1.837.54-.186c.255-.084.503-.187.742-.308l.51-.263 1.62 1.035.078.038c.03.015.06.028.092.04l.648-.649a.314.314 0 00-.023-.108.868.868 0 00-.07-.14l-.972-1.605.248-.494c.06-.113.116-.229.162-.348a7.4 7.4 0 00.13-.362l.17-.51 1.837-.463a.671.671 0 00.132-.038.269.269 0 00.084-.055l.001.001zm-6.917-3.428c.824 0 1.526.288 2.108.864a2.845 2.845 0 01.872 2.1 2.845 2.845 0 01-.872 2.099 2.883 2.883 0 01-2.108.864 2.87 2.87 0 01-2.092-.864 2.846 2.846 0 01-.872-2.1A2.845 2.845 0 019.955 9.9a2.866 2.866 0 012.092-.864zm0 4.94a1.9 1.9 0 001.398-.58c.386-.386.579-.85.579-1.397 0-.545-.193-1.011-.58-1.397a1.903 1.903 0 00-1.397-.579 1.9 1.9 0 00-1.397.58A1.9 1.9 0 0010.07 12c0 .546.193 1.012.58 1.398a1.9 1.9 0 001.396.579z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M15.875 6.025c.218-.137.468-.214.725-.223a.892.892 0 01.71.27l.696.695a.807.807 0 01.247.693 1.634 1.634 0 01-.248.71l-.678 1.143c.071.144.14.291.208.44.067.15.12.306.162.47l1.265.279.002.002c.236.04.46.156.672.347a.91.91 0 01.316.702v.988a.782.782 0 01-.316.648 1.835 1.835 0 01-.672.34l-1.281.309c-.05.148-.104.295-.163.44-.056.14-.12.276-.192.409l.678 1.142c.134.206.216.443.248.71a.808.808 0 01-.248.695l-.694.695a.893.893 0 01-.71.27 1.454 1.454 0 01-.726-.224l-1.111-.71c-.143.07-.287.137-.433.2a4.84 4.84 0 01-.463.17l-.278 1.282a1.36 1.36 0 01-.347.672.909.909 0 01-.702.316h-.989a.782.782 0 01-.648-.316 1.844 1.844 0 01-.34-.672l-.31-1.268a6.31 6.31 0 01-.494-.177 5.081 5.081 0 01-.478-.224l-1.142.726a1.38 1.38 0 01-.718.224.857.857 0 01-.703-.27l-.71-.696a.828.828 0 01-.232-.693c.031-.268.108-.505.232-.71l.726-1.205a8.467 8.467 0 01-.178-.379 3.19 3.19 0 01-.147-.409l-1.28-.308a1.843 1.843 0 01-.673-.34.783.783 0 01-.316-.648v-.988c0-.278.105-.513.316-.702.21-.191.435-.306.673-.348l1.264-.278c.043-.148.094-.292.155-.432.062-.144.123-.283.186-.417L6.01 8.171a1.754 1.754 0 01-.232-.71.827.827 0 01.232-.695l.71-.695a.857.857 0 01.703-.27c.282.015.522.09.716.224l1.144.726c.306-.163.626-.297.957-.401l.325-1.267c.055-.246.166-.475.323-.672a.801.801 0 01.664-.316h.989c.277 0 .509.106.694.316.186.211.304.43.355.657l.279 1.296c.307.103.606.227.896.371l1.11-.71zm-1.117.602l1.066-.682c.232-.146.498-.228.771-.238a.988.988 0 01.783.298h.001l.693.694a.901.901 0 01.275.772 1.729 1.729 0 01-.26.75l-.653 1.096c.064.13.127.263.188.398.06.136.111.28.152.428l1.236.272v.001c.246.048.476.172.69.364.23.208.347.468.347.773v.988a.88.88 0 01-.353.723c-.22.172-.456.292-.706.357l-1.232.296a7.33 7.33 0 01-.148.397c-.051.126-.108.25-.172.37l.65 1.095c.143.219.229.47.262.749a.901.901 0 01-.276.774l-.692.693a.988.988 0 01-.784.298 1.55 1.55 0 01-.77-.238l-1.067-.681a8.172 8.172 0 01-.39.178 4.905 4.905 0 01-.42.157l-.264 1.227c-.054.27-.183.518-.372.717-.207.23-.467.347-.771.347h-.988a.878.878 0 01-.724-.354 1.94 1.94 0 01-.356-.704v-.001l-.298-1.217a6.436 6.436 0 01-.45-.164 5.184 5.184 0 01-.439-.202l-1.095.695c-.228.15-.492.232-.764.24a.952.952 0 01-.776-.3l-.71-.694a.921.921 0 01-.258-.772 1.86 1.86 0 01.244-.748l.7-1.16a8.57 8.57 0 01-.157-.335 3.28 3.28 0 01-.136-.368l-1.228-.296h-.001a1.939 1.939 0 01-.706-.356.88.88 0 01-.353-.725v-.987c0-.305.117-.565.348-.773.22-.2.46-.324.717-.37l1.208-.266c.04-.132.088-.262.143-.389.055-.127.11-.252.165-.373l-.7-1.162a1.849 1.849 0 01-.245-.747.922.922 0 01.26-.773l.709-.694a.952.952 0 01.777-.298c.296.016.552.094.763.239l1.095.696c.281-.147.573-.27.874-.367l.311-1.215c.06-.258.176-.5.341-.707a.897.897 0 01.74-.353h.988c.304 0 .562.118.765.349.194.22.321.453.377.698l.267 1.245c.276.094.546.206.809.335zm3.99 5.929l-1.838.464-.17.509a7.298 7.298 0 01-.13.362 2.97 2.97 0 01-.162.348l-.248.494.973 1.605a.86.86 0 01.07.14.312.312 0 01.022.108l-.648.648a.755.755 0 01-.093-.039l-.076-.038-1.621-1.035-.51.263a5.403 5.403 0 01-.741.308l-.541.186-.4 1.837a.542.542 0 01-.11.2h-.895a.268.268 0 01-.054-.084.755.755 0 01-.038-.13l-.463-1.824-.525-.169a4.755 4.755 0 01-.803-.339l-.51-.264-1.62 1.035a.615.615 0 01-.1.054.25.25 0 01-.102.023l-.648-.632a.314.314 0 01.023-.108.5.5 0 01.07-.124l1.004-1.683-.231-.478a3.313 3.313 0 01-.28-.649l-.168-.524-1.807-.464a.851.851 0 01-.155-.038.272.272 0 01-.092-.055v-.91a.21.21 0 00.07-.03.562.562 0 01.1-.047l1.869-.418.169-.54c.031-.115.07-.229.115-.34.052-.124.106-.247.163-.37l.246-.478L6.86 7.663a.947.947 0 01-.07-.14.33.33 0 01-.023-.108l.648-.648a.63.63 0 01.093.039l.078.038 1.652 1.05.509-.263c.257-.137.525-.251.803-.34l.525-.168.448-1.792a.546.546 0 01.046-.154.357.357 0 01.061-.092h.91l.032.054a.435.435 0 01.047.116l.401 1.867.54.186c.134.03.263.074.387.13.124.057.247.116.37.177l.509.264 1.591-1.02a.366.366 0 01.2-.06l.648.632a.292.292 0 01-.023.093.5.5 0 01-.07.123l-.972 1.62.248.495c.068.126.13.254.185.386.05.12.092.244.123.37l.17.54 1.837.418c.08.019.153.056.216.107l-.015.881h-.002a.267.267 0 01-.083.054.678.678 0 01-.132.038zm.095-.126a.172.172 0 00.027-.014l.013-.786a.445.445 0 00-.142-.062l-1.89-.43-.186-.593v-.003a2.51 2.51 0 00-.12-.358 4.243 4.243 0 00-.18-.377l-.002-.001-.271-.542 1.002-1.67.003-.005a.404.404 0 00.057-.1v-.001l.001-.002a.197.197 0 00.008-.022l-.582-.568a.272.272 0 00-.111.043h-.001L14.83 7.99l-.557-.289a12.13 12.13 0 00-.367-.176 1.91 1.91 0 00-.367-.124l-.005-.001-.596-.205-.413-1.918a.36.36 0 00-.036-.09l-.004-.006h-.81a.267.267 0 00-.02.036h-.001a.455.455 0 00-.038.129l-.001.005-.462 1.847-.575.185a4.656 4.656 0 00-.787.333H9.79l-.558.289L7.54 6.927l-.074-.036a.611.611 0 00-.027-.013l-.572.572a.392.392 0 00.012.04.852.852 0 00.062.123l1.03 1.713-.269.524a8.37 8.37 0 00-.16.364 2.842 2.842 0 00-.112.33v.001l-.186.594-1.917.428a.469.469 0 00-.102.05v.798c.009.004.019.01.031.014.044.015.09.026.136.033h.005l1.862.479.185.575c.068.22.159.43.271.63l.002.003.255.527-1.033 1.732-.004.004a.405.405 0 00-.056.1v.001a.22.22 0 00-.012.038l.582.568a.208.208 0 00.03-.01v-.001a.525.525 0 00.085-.046h.001l1.668-1.065.558.29c.252.134.516.245.788.332l.575.185.477 1.876v.002c.01.047.021.085.033.114a.165.165 0 00.013.025h.803a.45.45 0 00.063-.129l.41-1.885.592-.203a5.34 5.34 0 00.729-.304l.558-.287 1.662 1.061.073.036a.67.67 0 00.027.013l.572-.572a.775.775 0 00-.074-.163l-1-1.65.271-.543.001-.001c.06-.11.113-.222.157-.337a7.3 7.3 0 00.13-.358l.186-.559 1.89-.477h.003a.575.575 0 00.113-.033zm-6.796-3.394c.824 0 1.526.288 2.108.864a2.844 2.844 0 01.872 2.1 2.845 2.845 0 01-.872 2.099 2.883 2.883 0 01-2.107.864 2.868 2.868 0 01-2.093-.864 2.846 2.846 0 01-.872-2.1A2.845 2.845 0 019.955 9.9a2.867 2.867 0 012.092-.864zm-2.158.797a2.94 2.94 0 00-.901 2.166 2.94 2.94 0 00.9 2.167 2.961 2.961 0 002.16.892 2.98 2.98 0 002.174-.892 2.94 2.94 0 00.9-2.167 2.94 2.94 0 00-.9-2.167 2.98 2.98 0 00-2.174-.89 2.962 2.962 0 00-2.16.89zm3.489 3.496c.368-.368.55-.809.55-1.33 0-.52-.182-.962-.551-1.33l-.001-.001a1.81 1.81 0 00-1.327-.55h-.002c-.52 0-.962.183-1.33.552l-.001.001a1.81 1.81 0 00-.55 1.327V12c0 .52.183.962.552 1.33.368.368.809.55 1.33.55.52 0 .962-.182 1.33-.551zm-2.728-2.726a1.9 1.9 0 011.397-.58 1.904 1.904 0 011.397.579c.387.386.58.852.58 1.397 0 .546-.193 1.011-.579 1.397-.386.387-.852.58-1.398.58a1.9 1.9 0 01-1.396-.579 1.901 1.901 0 01-.58-1.398 1.903 1.903 0 01.579-1.396z" clipRule="evenodd"></path></svg>
    )
}

function Bell() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M18.221 15.131c.274.334.49.632.648.892.157.261.173.522.047.783a.773.773 0 01-.616.454 4.888 4.888 0 01-.663.063h-2.952a2.57 2.57 0 01-.79 1.894 2.613 2.613 0 01-1.91.783c-.746 0-1.383-.26-1.91-.783a2.57 2.57 0 01-.789-1.894H6.398c-.242 0-.492-.029-.75-.086a.788.788 0 01-.56-.43c-.127-.262-.116-.53.031-.807.147-.277.347-.582.6-.916.284-.365.594-.78.931-1.245.337-.464.505-.947.505-1.448V9.12c0-.71.124-1.375.371-1.996a5.184 5.184 0 011.019-1.628c.431-.464.941-.83 1.53-1.096a4.558 4.558 0 011.895-.399c.684 0 1.32.133 1.91.4.59.265 1.102.63 1.54 1.095a5.11 5.11 0 011.025 1.628c.248.621.371 1.287.371 1.996v3.272c0 .512.16 1.008.482 1.488.32.48.629.897.923 1.252zm-6.237 3.78c.427 0 .792-.15 1.095-.451.302-.3.454-.662.454-1.085h-3.097c0 .423.151.785.454 1.085.303.3.667.45 1.094.45zm5.594-2.822a5.039 5.039 0 00-.168-.22 14.96 14.96 0 01-1.232-1.673 3.373 3.373 0 01-.544-1.864V9.153c0-.547-.094-1.06-.283-1.536a3.993 3.993 0 00-.773-1.247 3.668 3.668 0 00-1.155-.844 3.367 3.367 0 00-1.446-.312c-.51 0-.988.104-1.431.312-.444.208-.83.489-1.156.844-.326.355-.581.77-.765 1.247a4.236 4.236 0 00-.276 1.536v3.18a3.12 3.12 0 01-.573 1.817 48.208 48.208 0 01-1.21 1.68 4.714 4.714 0 00-.175.26h11.187z" clip-rule="evenodd">
            </path></svg>
    )
}

function Connect() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z">
            </path>
        </svg>
    )
}

function Down() {
    return (
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.785 8.782a.725.725 0 00-1.038 0L12 14.632l-5.746-5.85a.725.725 0 00-1.039 0 .757.757 0 000 1.057l6.266 6.38a.726.726 0 001.038 0l6.266-6.38a.757.757 0 000-1.057z">
            </path>
        </svg>
    )
}

function Star() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.968 10.066a.656.656 0 00-.52-.46l-4.746-.727-2.122-4.502A.644.644 0 0012 4a.644.644 0 00-.58.377L9.299 8.88l-4.745.726a.655.655 0 00-.521.461.7.7 0 00.163.694l3.434 3.502-.81 4.947a.692.692 0 00.257.662.622.622 0 00.68.051L12 17.585l4.244 2.337a.622.622 0 00.68-.051.692.692 0 00.258-.662l-.81-4.947 3.433-3.502a.7.7 0 00.163-.694zm-4.742 3.474a.697.697 0 00-.186.6l.646 3.946-3.385-1.864a.622.622 0 00-.602 0l-3.385 1.864.646-3.946a.697.697 0 00-.186-.6l-2.74-2.793 3.787-.58a.65.65 0 00.486-.37L12 6.206l1.693 3.59a.65.65 0 00.486.371l3.786.58-2.74 2.793z">
            </path>
        </svg>
    )
}

function Close() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="M17.858 6.142a.485.485 0 00-.685 0L6.142 17.172a.485.485 0 10.686.686l11.03-11.03a.485.485 0 000-.686z"></path><path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="M17.858 17.173l-5.515-5.516-5.516-5.515a.485.485 0 10-.685.685l11.03 11.031a.483.483 0 00.686 0 .485.485 0 000-.685z">
            </path>
        </svg>
    )
}

function Back() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" stroke="currentColor" stroke-width="0.2" d="M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"></path><path fill="currentColor" stroke="currentColor" stroke-width="0.2" d="M6.366 12l4.426-4.426a.565.565 0 10-.8-.8L5.166 11.6a.566.566 0 000 .8l4.826 4.826a.564.564 0 00.8 0 .565.565 0 000-.8L6.366 12z">
            </path>
        </svg>
    )
}

function Pass() {
    return (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="M18.834 7.166a.565.565 0 00-.8 0l-8.447 8.466-3.622-3.63a.565.565 0 00-.8 0 .568.568 0 000 .802l4.022 4.03a.563.563 0 00.8 0l8.847-8.866a.568.568 0 000-.802z">
            </path>
        </svg>
    )
}

function Reject() {
    return (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="M17.858 6.142a.485.485 0 00-.685 0L6.142 17.172a.485.485 0 10.686.686l11.03-11.03a.485.485 0 000-.686z"></path><path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="M17.858 17.173l-5.515-5.516-5.516-5.515a.485.485 0 10-.685.685l11.03 11.031a.483.483 0 00.686 0 .485.485 0 000-.685z">
            </path>
        </svg>
    )
}

function Search() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" >
            <path fill="currentColor" d="M15.565 5.984A6.73 6.73 0 0010.775 4a6.73 6.73 0 00-4.79 1.984A6.73 6.73 0 004 10.774a6.73 6.73 0 001.984 4.79 6.73 6.73 0 004.79 1.985 6.73 6.73 0 004.79-1.984 6.73 6.73 0 001.985-4.79 6.73 6.73 0 00-1.984-4.79zm-4.79 10.272a5.488 5.488 0 01-5.482-5.482 5.488 5.488 0 015.481-5.481 5.488 5.488 0 015.482 5.481 5.488 5.488 0 01-5.482 5.482z"></path><path fill="currentColor" d="M19.81 18.896l-4.248-4.248a.646.646 0 10-.914.914l4.249 4.249a.644.644 0 00.914 0 .646.646 0 000-.915z">
            </path>
        </svg>
    )
}

function FTIQuestion() {
    return (
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11.5 4C9.025 4 7 5.966 7 8.369c-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-1.458 1.198-2.621 2.7-2.621 1.502 0 2.7 1.163 2.7 2.62.01 1.197-.624 1.81-1.51 2.622-.442.406-.933.83-1.35 1.384-.415.554-.74 1.275-.74 2.111-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-.431.13-.731.394-1.083.263-.351.673-.724 1.134-1.146.92-.845 2.08-1.753 2.072-3.887C16 5.983 13.97 4 11.5 4zm0 12.67c-.663 0-1.2.521-1.2 1.165 0 .643.537 1.165 1.2 1.165.663 0 1.2-.522 1.2-1.165s-.537-1.165-1.2-1.165z">
            </path>
        </svg>
    )
}

function Export() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.902 12.17a.646.646 0 00-.646.647v4.903a.989.989 0 01-.988.987H6.28a.989.989 0 01-.987-.987V8.732c0-.545.443-.988.987-.988h4.903a.646.646 0 100-1.293H6.28A2.283 2.283 0 004 8.731v8.989A2.283 2.283 0 006.28 20h8.988a2.283 2.283 0 002.28-2.28v-4.903a.646.646 0 00-.645-.646zM19.354 4H14.45a.646.646 0 100 1.293h4.256v4.256a.646.646 0 001.293 0V4.646A.646.646 0 0019.354 4z"></path><path fill="currentColor" d="M19.81 4.19a.646.646 0 00-.913 0l-8.988 8.988a.646.646 0 00.914.914l8.988-8.988a.646.646 0 000-.914z">
            </path>
        </svg>
    )
}

function DotDotDot() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" >
            <circle cx="6" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="18" cy="12" r="1" fill="currentColor">
            </circle>
        </svg>
    )
}

function Clock() {
    return (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"></path><path fill="currentColor" d="M14.663 13.75l-2.017-2.018V7.588a.646.646 0 10-1.292 0V12c0 .171.068.336.189.457l2.206 2.206a.644.644 0 00.914 0 .646.646 0 000-.914z">
            </path>
        </svg>
    )
}

function DotTransaction() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" ><path fill="currentColor" fill-rule="evenodd" d="M8.556 16.508c0-1.93 1.542-3.493 3.444-3.493s3.444 1.564 3.444 3.492C15.444 18.438 13.902 20 12 20s-3.444-1.564-3.444-3.492zM12 14.366c-1.166 0-2.112.959-2.112 2.142 0 1.182.946 2.141 2.112 2.141 1.166 0 2.112-.959 2.112-2.142 0-1.182-.946-2.141-2.112-2.141zM3 9.183c0-1.307 1.044-2.366 2.333-2.366 1.288 0 2.333 1.06 2.333 2.366s-1.045 2.366-2.333 2.366C4.044 11.549 3 10.489 3 9.183zm2.333-1.015c-.553 0-1.001.454-1.001 1.015 0 .56.448 1.015 1 1.015.554 0 1.002-.455 1.002-1.015 0-.56-.448-1.015-1.001-1.015zm11.001 1.015c0-1.307 1.045-2.366 2.333-2.366 1.289 0 2.333 1.06 2.333 2.366s-1.044 2.366-2.333 2.366c-1.288 0-2.333-1.06-2.333-2.366zm2.333-1.015c-.553 0-1 .454-1 1.015 0 .56.447 1.015 1 1.015.553 0 1.001-.455 1.001-1.015 0-.56-.448-1.015-1-1.015zm-9-1.802C9.667 5.059 10.711 4 12 4c1.288 0 2.333 1.06 2.333 2.366S13.288 8.73 12 8.73c-1.289 0-2.333-1.059-2.333-2.365zM12 5.35c-.553 0-1 .454-1 1.015 0 .56.447 1.015 1 1.015.553 0 1-.455 1-1.015 0-.56-.447-1.015-1-1.015z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M11.334 13.68V7.775h1.332v5.907h-1.332zm1.723.396l3.907-3.962.942.955-3.907 3.962-.942-.955zm-2.166 0l-3.907-3.962-.942.955 3.907 3.962.942-.955z" clip-rule="evenodd"></path></svg>
    )
}

function DotEditLabel() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" ><path fill="currentColor" fill-rule="evenodd" d="M20.835 10.825c.487.664.487 1.69 0 2.35l-3.08 4.202a2.6 2.6 0 01-.921.754 2.623 2.623 0 01-1.153.299H4.446A1.649 1.649 0 012.8 16.784V7.216c0-.907.739-1.646 1.646-1.646h11.235c.38 0 .787.115 1.15.3.364.184.698.445.923.752l3.08 4.203zm-4.203-3.378l3.078 4.199c.057.08.095.21.095.355a.623.623 0 01-.097.355l-3.081 4.202v.001a1.223 1.223 0 01-.427.33 1.257 1.257 0 01-.522.148H4.446a.252.252 0 01-.25-.25v-9.57c0-.137.114-.25.25-.25h11.235c.14 0 .332.053.52.149.189.095.346.218.43.33z" clip-rule="evenodd"></path></svg>
    )
}

export {
    Logo, Setting, Bell, Connect, Star, Down, Close, Back, Pass, Reject, Search,
    FTIQuestion, Export, DotDotDot, Clock,
    DotTransaction, DotEditLabel
}