Template.detail.helpers({
    data: function(){

        var board = CollectionBoard.findOne({_id:
        Router.current().params._id});
        console.log(board);
     
        return board

    }   
});