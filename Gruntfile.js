module.exports = function(grunt){

//config

grunt.initConfig({
  concat:{
    js:{
      src:["js/highcharts.js","js/app.js","js/risorse.js","js/main.js"],
      dest:"build/script.js"

    }
  },
  uglify:{
    build:{
      files: [{
        src:"build/script.js",
        dest:"build/script.js"
      }]
    }
  },
  'json-minify': {
  build: {
    files: './json/segnalazioni.geojson'
  }
}


});

//plugins

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-json-minify');


//register task
grunt.registerTask("concat-js",["concat:js"]);

};
