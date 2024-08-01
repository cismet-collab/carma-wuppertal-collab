import {
  faBicycle,
  faRoute,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
export function getWegeartIcon(wegeart) {
  let iconV;
  switch (wegeart) {
    case "mit dem Rad":
      iconV = faBicycle;
      break;
    case "zu Fuß":
      iconV = faWalking;
      break;
    default:
      iconV = faRoute;
      break;
  }
  return iconV;
}

export const featureSamples4Icons = {
  aussichtspunkt: {
    properties: {
      svgBadge: `<?xml version="1.0" encoding="utf-8"?> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                 <rect class="bg-fill" fill="#695656" x="0" y="0" rx="3.3" ry="3.3" width="20" height="20"/>
           
     <path class="fg-fill" fill="#FFFFFF" d="M14.104,7.132l3.08-2.135c-0.58-0.835-1.304-1.568-2.133-2.157l-2.18,3.069
       C13.352,6.242,13.77,6.656,14.104,7.132L14.104,7.132z M14.934,10.902l3.676,0.664c0.183-1,0.188-2.029,0.019-3.032l-3.685,0.624
       c0.049,0.274,0.072,0.556,0.072,0.844C15.016,10.309,14.986,10.609,14.934,10.902z M12.825,14.127l2.146,3.094
       c0.836-0.58,1.567-1.304,2.156-2.133l-3.057-2.17C13.73,13.391,13.309,13.8,12.825,14.127z M9.08,14.891L8.4,18.646
       c1,0.181,2.03,0.187,3.034,0.017l-0.635-3.738c-0.249,0.038-0.504,0.06-0.764,0.06C9.708,14.982,9.389,14.95,9.08,14.891
       L9.08,14.891z M5.919,12.807l-3.173,2.2c0.58,0.835,1.304,1.567,2.133,2.157l2.227-3.135C6.644,13.691,6.242,13.279,5.919,12.807z
        M5.131,9.126l-3.81-0.69c-0.181,1-0.187,2.03-0.017,3.032l3.817-0.646c-0.044-0.268-0.067-0.541-0.067-0.82
       C5.055,9.703,5.081,9.411,5.131,9.126z M7.15,5.942L4.96,2.783c-0.835,0.58-1.567,1.304-2.157,2.133L5.95,7.151
       C6.279,6.683,6.685,6.273,7.15,5.942z M10,13.08c-1.681,0-3.043-1.363-3.043-3.043c0-1.312,0.831-2.43,1.994-2.858V1.08h2.145v6.117
       c1.139,0.44,1.947,1.546,1.947,2.84C13.043,11.717,11.682,13.08,10,13.08z"/>
     </svg>`,
      svgBadgeDimension: { width: "20", height: "20" },
      color: "#655756",
    },
  },
  zwischenstopp: {
    properties: {
      svgBadge: `<?xml version="1.0" encoding="utf-8"?> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                 <rect class="bg-fill" fill="#226c32" x="0" y="0" rx="3.3" ry="3.3" width="20" height="20"/>
     
     <path class="fg-fill" fill="#FFFFFF" d="m14.92,8.84c-1.32,0-2.58,1.04-2.5,2.58s2.36,3.9,2.36,3.9l.15.15c.15.15.22.07.37-.07s2.06-2.13,2.21-3.97c.22-1.84-1.32-2.58-2.58-2.58h0Zm.13,3.75c-.71,0-1.29-.57-1.29-1.29s.57-1.29,1.29-1.29,1.29.57,1.29,1.29-.57,1.29-1.29,1.29Z"/>
     <path class="fg-fill" fill="#FFFFFF" d="m13.4.6c-.6,0-1.17.47-1.13,1.17.04.7,1.07,1.77,1.07,1.77l.07.07c.07.07.1.03.17-.03.07-.07.93-.97,1-1.8.1-.83-.6-1.17-1.17-1.17h0Zm.06,1.7c-.32,0-.58-.26-.58-.58s.26-.58.58-.58.58.26.58.58-.26.58-.58.58Z"/>
     <path class="fg-fill" fill="#FFFFFF" d="m2.43,3.65c-.72,0-1.4.56-1.36,1.4s1.28,2.12,1.28,2.12l.08.08c.08.08.12.04.2-.04.08-.08,1.12-1.16,1.2-2.16.12-1-.72-1.4-1.4-1.4h0,.01Zm.07,2.04c-.38,0-.7-.31-.7-.7s.31-.7.7-.7.7.31.7.7-.31.7-.7.7Z"/>
     <path class="fg-fill" fill="#FFFFFF" d="m6.27,13.1c-1.55-.36-4.57-.7-4.55-2.95.24-2.25,3.47-1.27,5.23-1.51,2.24-.26,4.56-1.61,5.19-3.9.27-1.37-1.22-2.1-2.51-1.77-1.24.34-2.05.92-2.86,1.22-.7.16-1.46.22-1.74-.28-.36-.63.29-1.11.81-1.38,1.27-.58,2.97-.99,2.2-2.53h-.35c.25.48.38.94-.13,1.33-.8.58-2.12.66-2.81,1.56-.62.76.16,1.72.98,1.8,1.52.1,3.22-1.65,4.94-1.32.57.13,1.12.66.96,1.29-.56,1.94-2.79,3.21-4.72,3.38-2.07.12-5.56-.92-5.9,2.03-.2,2.74,2.92,3.41,5.04,3.97,1.38.37,2.73.82,4.03,1.38,2.15.97,4.85,2.38,5.75,4.6h.91c.3,0,.59-.04.87-.12,0,0,0-.02-.01-.03-1.84-4.34-7.22-5.75-11.33-6.78Z"/>
     </svg>`,
      svgBadgeDimension: { width: "20", height: "20" },
      color: "#226c32",
    },
  },
};