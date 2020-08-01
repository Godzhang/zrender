type RequestAnimationFrameType = typeof window.requestAnimationFrame

let requestAnimationFrame: RequestAnimationFrameType;

requestAnimationFrame = (
	typeof window !== 'undefined'
		&& (window.requestAnimationFrame && window.requestAnimationFrame.bind(window))
		// https://github.com/ecomfe/zrender/issues/189#issuecomment-224919809
		|| ((window as any).msRequestAnimationFrame && (window as any).msRequestAnimationFrame.bind(window))
		|| (window as any).mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame
	) || function (func: Parameters<RequestAnimationFrameType>[0]): number {
	    return setTimeout(func, 16) as any;
	};

export default requestAnimationFrame;