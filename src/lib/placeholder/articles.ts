import type { Article } from '$lib/types';
import laptop_image from '$lib/assets/pexels-laptop.jpg'
import glasses_image from '$lib/assets/pexels-glasses.jpg'
import macbook_with_code_image from '$lib/assets/pexels-Macbook-with-code.jpg'

export const articles: Article[] = [
	{
		title: 'Animate to Auto',
		content: 'Animate to Auto is a new CSS capability that enables developers to smoothly animate elements\n' +
			'between fixed size values and intrinsic sizing keywords such as auto, min-content, max-content, or\n' +
			'fit-content.\n' +
			'This is achieved primarily through the interpolate-size: allow-keywords property, and the calc-size()\n' +
			'function for performing calculations on intrinsic sizes. The feature works\n' +
			'universally across any CSS property that accepts size values—not just height, but also width, padding,\n' +
			'margin, and other sizing properties—making it a versatile solution for creating dynamic, content-aware\n' +
			'animations.',
		img: laptop_image,
		flag: 'main'
	},
	{
		title: 'field-sizing',
		content: 'The field-sizing property is a new CSS feature that allows form controls, such as textareas and inputs,\n' +
			'to automatically resize based on their content. By setting field-sizing:\n' +
			'content, an element that traditionally has a fixed default size will instead grow or shrink to fit the text\n' +
			'entered by the user.\n' +
			'This provides a native, CSS-only way to create form fields that adapt to their value, improving layout\n' +
			'consistency and user experience without requiring manual resizing.',
		img: macbook_with_code_image,
		flag: 'medium'
	},
	{
		title: '@function',
		content: 'The @function at-rule introduces the ability to define custom, reusable functions directly within CSS.\n' +
			'These functions can accept arguments, perform calculations or logic, and\n' +
			'return a single value to be used in any CSS property.\n' +
			'Once defined, a custom function is called using a dashed-ident syntax, such as –my-function(arg1,\n' +
			'arg2). This allows developers to encapsulate complex or repetitive logic into a clean, callable unit,\n' +
			'making stylesheets more modular and readable.',
	},
	{
		title: 'reading-flow',
		content: 'The reading-flow property is a new CSS accessibility feature designed to control the logical order of\n' +
			'content within a layout. It allows developers to specify how elements in a grid or\n' +
			'flex container should be navigated with a keyboard (using the Tab key) and read by assistive technologies.\n' +
			'By setting values such as grid-rows or grid-columns, the navigation sequence can be made to\n' +
			'follow the visual arrangement of items, rather than their original order in the HTML source code.\n',
	},
	{
		title: '@property',
		content: 'With the introduction of the property at-rule, CSS now allows the definition of custom properties without\n' +
			'the need for JavaScript. This results in CSS-native support for typed variables, default values, and\n' +
			'inheritance. Given valid code as a prerequisite, the @property rule will register the custom property.\n' +
			'The example below demonstrates the usage of initial values, parent object\n' +
			'overwrites, manual usage of initial values, and handling of invalid types. The example is a slightly\n' +
			'modified version of the example shown on MDN.',
	},
	{
		title: 'if() function',
		content: 'With the introduction of the CSS if function, it is no longer necessary to set each property value manually,\n' +
			'but rather set them depending on a conditional test inside of any property. Similar to the well known usage\n' +
			'of if-else-statements, the if function allows to specify zero or more semi-colon-separated condition-value\n' +
			'pairs. In the case of no true condition an else case should be defined or a fallback value must be set to\n' +
			'avoid problems with non-supporting browsers. There are 3 different types of if-tests: style-, media- and\n' +
			'feature-queries. It is also possible to nest if functions for more advanced usage.',
	},
	{
		title: 'Masonry Layouts',
		content: 'Masonry layout introduces a new, more dynamic layout method to make organization of elements in a\n' +
			'grid more natural and less strict. Instead of a fixed grid with unwanted gaps, items automatically fill up\n' +
			'gaps for an easy on the eye look. The masonry layout is achieved by combining one strict grid axis and\n' +
			'one masonry axis. Items are filled according to the masonry algorithm which loads items into the column\n' +
			'with the most room, resulting in a tightly packed, space-saving grid.',
	},
	{
		title: '@supports',
		content: 'Using the @supports CSS at-rule enables developers to apply CSS declarations based on whether a\n' +
			'browser supports a specific feature. To define more precise support rules, multiple conditions can be\n' +
			'combined by conjunctions (and), disjunctions (or), and even negations. These support conditions can\n' +
			'follow either a property-value syntax or a function syntax.',
		flag: 'medium'
	},
	{
		title: 'popover-open',
		content: 'The Popover API itself is not a CSS feature, but the ::popover-open CSS pseudo-class can be used to\n' +
			'change the appearance of a popover element that is in the "showing" state. This features allows developers\n' +
			'to override default styles of a popover element only when it is displayed to the use',
	},
	{
		title: 'CSS Nesting',
		content: 'The CSS nesting module does not provide much additional value to users of websites in comparison to\n' +
			'many of the other modern CSS features. On the other hand, it does allow developers to write their CSS\n' +
			'code in a more compact manner and also more intuitively at times. In general, CSS nesting allows nesting\n' +
			'of rules within one another. The example below was inspired by the explainer of the corresponding W3C\n' +
			'Editor’s Draft.',
	},
	{
		title: 'light-dark',
		content: 'Many popular websites provide the user with a choice to change between light and dark modes. Some\n' +
			'users prefer the dark text on a light background, while others prefer light text on a dark background. The\n' +
			'light-dark function allows properties to be assigned two different colors. Either\n' +
			'light or dark preference can then be manually enforced or decided based on either the operating system\n' +
			'settings or via the user agent settings. The example is a slightly modified\n' +
			'version of the example shown on MDN.',
		flag: 'medium'
	},
	{
		title: 'text-wrap',
		content: 'It allows developers to improve breaks/line wraps in typography or turn it off completely. Available options\n' +
			'include “wrap”, which causes the text to wrap wherever it would overflow, and “pretty” which does the\n' +
			'same as wrap but with another algorithm that values layout over computational speed. Furthermore,\n' +
			'“stable” works similarly to “wrap”, but whenever the user is editing the text, the lines before will not be\n' +
			'affected by the changes of content. The complete opposite is “nowrap” which does cause the text to not\n' +
			'wrap at all. Finally, “balance” option causes the number of characters to be balanced on each line. The\n' +
			'example is a slightly modified version of the example shown on MDN.',
	},
	{
		title: 'linear()',
		content: 'The CSS function linear() is an "easing function" used to control the timing of CSS animations and\n' +
			'transitions. Its primary purpose is to create a transition curve that moves at a constant speed between\n' +
			'multiple defined points. Unlike a simple linear animation, which only connects a start and an end point at\n' +
			'a uniform speed, linear() allows for the definition of multiple intermediate points. This enables developers\n' +
			'to approximate complex animation curves through a sequence of straight line segments, thereby gaining\n' +
			'more precise control over the animation’s progression.',
	},
	{
		title: 'Scroll-Driven Animations',
		content: 'CSS scroll-driven animations are a modern CSS feature that allows animations to be linked directly to\n' +
			'a user’s scroll progress. Instead of an animation running over a fixed period (e.g., in 3 seconds), its\n' +
			'progress is controlled by scrolling within a container. This opens up new, high-performance possibilities\n' +
			'for interactive web experiences, such as parallax effects, progress indicators, or fading in elements as they\n' +
			'enter the viewport.',
		img: glasses_image,
		flag: 'medium'
	},
	{
		title: 'has()',
		content: 'The CSS pseudo-class :has() is a powerful selector, often referred to as the "parent selector." Its core\n' +
			'function is to select an element based on the presence of specific descendant elements it contains or\n' +
			'subsequent siblings that follow it. This was a long-awaited feature because it allows developers, for the\n' +
			'first time, to apply styling rules to a parent or ancestor element depending on its content. This utility\n' +
			'extends beyond direct children to any element within its DOM subtree, providing a new level of contextual\n' +
			'styling capability directly within CSS.',
	},
	{
		title: 'Container Style Queries',
		content: 'Container style queries expand upon the concept of container queries, moving beyond simple size-based\n' +
			'adjustments. While traditional container queries adapt the layout based on a container’s width or height,\n' +
			'style queries allow styles to be applied based on the computed CSS values of the container itself. So,\n' +
			'instead of asking, "How wide is the container?", style queries ask, "What style does the container have?".\n' +
			'Currently, support is primarily limited to querying CSS custom properties. This makes it possible to\n' +
			'change the appearance of child elements depending on the value set for a specific custom property on the\n' +
			'container.',
		flag: 'medium'
	},
	{
		title: 'Container Size Queries',
		content: 'Container size queries are a central feature of responsive design that allow styles to be applied to an\n' +
			'element based on the size of its parent container, rather than relying on the size of the entire browser\n' +
			'window. To utilize this, an element must be explicitly declared as a "size query container," typically\n' +
			'with the CSS property ‘container-type: inline-size‘. Subsequently, the ‘@container‘ rule can be used\n' +
			'to define conditional styles that activate when the container meets specific size characteristics, such as\n' +
			'‘min-width‘, ‘max-height‘, or ‘aspect-ratio‘. This enables components to dynamically adapt their layout\n' +
			'and appearance to the space available to them.',
	},
];