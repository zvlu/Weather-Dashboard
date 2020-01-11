

const apiKey = '&apikey=63d3c3ee188d89772b5fad7611b9dc22';
  




$( document ).ready(function() {
    $('#searchBtn').on ('click',function(){

        var city = $('#city-Name').val();
       
       

             
            // 5 day forecast call
          
            var renderWeather = function (city) {
                var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey;  
                    $.ajax({
                        url: baseUrl,
                        method: "GET",
                        
                    }).then(function (response) {
                        console.log(response);
                        
                        var code = response.weather[0].icon;
                        var imgSrc =  "https://openweathermap.org/img/wn/" + code + ".png";
                        var iconImg =  $("<img>").attr("src", imgSrc);
                        iconImg.attr('alt', response.weather[0].main);

                        // $("#forecast").removeClass("display");
                        $("#city-Name").text(response.name + ", " + response.sys.country + " " + moment().format('l'));
                        
                        $("#imgIcon").html(iconImg);
                        $("#temp").text(response.main.temp + " °F");
                        $("#temp").wrap("<strong></strong>");
                        $("#humidity").text(response.main.humidity + "%");
                        $("#humidity").wrap("<strong></strong>");
                        $("#wind-speed").text(response.wind.speed + " MPH");
                        $("#wind-speed").wrap("<strong></strong>");

    
                        
                    });
                   

    
            
               
                
            }
            var fiveDay = function () {
                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
                    method: "GET",
                    
                }).then(function (response) {
                    
                  
                    
                    console.log(response);
                    //Day one forecast render
                    // Use the code because the 5 day returns a object of 5 day with each day having 5 different time of days
                    var code6 = response.list[6].weather[0].icon;
                   
                    var imgSrc6 = "https://openweathermap.org/img/wn/" + code6 + ".png";
                    
                    var iconImg6 = $("<img>").attr("src", imgSrc6);

                    //Day two forecast render

                    var code14 = response.list[14].weather[0].icon;
                   
                    var imgSrc14 = "https://openweathermap.org/img/wn/" + code14 + ".png";
                    
                    var img14 = $("<img>").attr("src", imgSrc14);

                    //Day three forecast render

                    var code22 = response.list[22].weather[0].icon;
                   
                    var imgSrc22 = "https://openweathermap.org/img/wn/" + code22 + ".png";
                   
                    var img22 = $("<img>").attr("src", imgSrc22);

                    //Day four

                    var code30 = response.list[30].weather[0].icon;
                   
                    var imgSrc30 = "https://openweathermap.org/img/wn/" + code30 + ".png";
                   
                    var img30 = $("<img>").attr("src", imgSrc30);

                    //Day Five

                    var code38 = response.list[38].weather[0].icon;
                    
                    var imgSrc38 = "https://openweathermap.org/img/wn/" + code38 + ".png";
                   
                    var img38 = $("<img>").attr("src", imgSrc38);



                    // day 1 set attributes
                    $("#dayOne h5").text(moment().add(1, "days").format("l")); 
                    $("#dayOne .img-Icon-5").html(iconImg6);
                    $("#dayOne .temp-5").text("Temp: " + response.list[6].main.temp + " °F");
                    $("#dayOne .humidity-5").text("Humidity: " + response.list[6].main.humidity + "%");

                    // day two
                    $("#dayTwo h5").text(moment().add(2, "days").format("l"));
                    $("#dayTwo .img-Icon-5img-Icon-5").html(img14);
                    $("#dayTwo .temp-5").text("Temp: " + response.list[14].main.temp + " °F");
                    $("#dayTwo .humidity-5").text("Humidity: " + response.list[14].main.humidity + "%");

                    //day 3 
                    $("#dayThree h5").text(moment().add(3, "days").format("l"));
                    $("#dayThree .img-Icon-5").html(img22);
                    $("#dayThree .temp-5").text("Temp: " + response.list[22].main.temp + " °F");
                    $("#dayThree .humidity-5").text("Humidity: " + response.list[22].main.humidity + "%");

                    // day 4 
                    $("#dayFour h5").text(moment().add(4, "days").format("l"));
                    $("#dayFour .img-Icon-5").html(img30);
                    $("#dayFour .temp-5").text("Temp: " + response.list[30].main.temp + " °F");
                    $("#dayFour .humidity-5").text("Humidity: " + response.list[30].main.humidity + "%");

                    //Day 5 
                    $("#dayFive h5").text(moment().add(5, "days").format("l"));
                    $("#dayFive .img-Icon-5").html(img38);
                    $("#dayFive .temp-5").text("Temp: " + response.list[38].main.temp + " °F");
                    $("#dayFive .humidity-5").text("Humidity: " + response.list[38].main.humidity + "%");




                }); 
    
            }
            var renderUV = function () {
                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/uvi?" + apiKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon,
                    method: "GET",
                    
                }).then(function (response) {
                    
                  
                    
                    console.log(response);
                }); 
    
            }
             
        renderWeather(city);
        fiveDay();
        renderUV();

          
         
    });
       
       
    
    
    });
