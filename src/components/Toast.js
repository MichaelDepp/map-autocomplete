import React, { useState, useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			onClose();
		}, 2000);

		return () => clearTimeout(timer);
	}, [onClose]);

	const toastClasses = {
		success: 'bg-green-500',
		error: 'bg-red-500',
		warning: 'bg-yellow-500',
	};

	return (
		visible && (
			<div className="fixed top-0 left-0 right-0 p-4 flex justify-center z-50">
				<div className={`rounded-lg shadow-lg p-4 max-w-sm w-full ${toastClasses[type]}`}>
					<div className="flex items-center justify-between">
						<p className="text-sm text-white">{message}</p>
						<button
							onClick={() => {
								setVisible(false);
								onClose();
							}}
							className="text-sm text-white focus:outline-none"
						>
							&#10005;
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default Toast;
