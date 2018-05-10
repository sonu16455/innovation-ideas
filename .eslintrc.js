module.exports = {
	extends: 'airbnb',
	plugins: ['prettier'],
	env:{
		"browser": true
	},
	rules: {
		'prettier/prettier': 'error',
		"comma-dangle": ["error", "never"],
		"jsx-a11y/anchor-is-valid": [ "error", {
			"components": [ "Link" ],
			"specialLink": [ "to" ]
		  }]
	},
};
