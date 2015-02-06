module.exports= function(grunt){
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
                files: {
                    'stylesheets/<%= pkg.file_name %>.css': 'stylesheets/sass/*.scss'
                }
            }
		},

		// 'min': {
		// 	'dist': {
		// 		'options': {
		// 			'report': false
		// 		},
		// 		'files': [{
		// 			'src': ['javascripts/echo.js','javascripts/app.js'],
		// 			'dest': 'javascripts/<%= pkg.file_name %>.min.js'
		// 		}]
		// 	}
		// },

		'cssmin': {
			'dist': {
				'options': {
					'report': false
				},
				'files': [{
					'src': 'stylesheets/<%= pkg.file_name %>.css',
					'dest': 'stylesheets/<%= pkg.file_name %>.min.css'
				}]
			}
		},

		watch: {
			scripts: {
                files: [
                    'stylesheets/sass/*.scss'
                ],
                tasks: ['sass','cssmin']
            }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('w',['watch']);

	// grunt.registerTask('default', ['sass','min','cssmin']);
	grunt.registerTask('default', ['sass','cssmin']);

}