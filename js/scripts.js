$(document).ready(function() {
  $("form").submit(function(event) {

    var favAnimal = $("input#fav-animal").val();
    var favFood = $("input#fav-food").val();
    var favSport = $("input#fav-sport").val();
    var favColor = $("input#fav-color").val();
    var favArray = [favAnimal, favFood, favSport];
    var favArray2 = favArray.slice(0,3);
    var favArrayPop = favArray2.pop();
    var favArrayFinal = favArray2.reverse();
    var favArrayPush = favArrayFinal.push(favArrayPop);

    $("#thing1").empty().text(favArrayFinal[0]);
    $("#thing2").empty().text(favArrayFinal[1]);
    $("#thing3").empty().text(favArrayFinal[2]);

    $(".display").show();

    event.preventDefault();
  });
});
