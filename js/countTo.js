const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const speed = +counter.getAttribute('data-speed');
		const count = +counter.innerText;


		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = (count + 87).toLocaleString('en');
			// Call function every ms
			setTimeout(updateCount, speed);
			console.log(count.toLocaleString('en') + "\n");
		} else {
			counter.innerText = target.toLocaleString('en');
		}
	};

	updateCount();
});