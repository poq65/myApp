

Template.haha.events({
    'click [name=submit]': function(e, tmp1){
        var title=$('[name=title]').val();
        var num=$('[name=num]').val();
        var content=$('[name=content]').val();
        var count=$('[name=count]').val();

        var obj={
            '제목': title,
            '글번호': num,
            '내용': content,
            '조회수': count
        }
        if($('[name=hidden_id]').val().length<=0){
            //입력이라면        
            console.log(obj)
            CollectionBoard.insert(obj);
            //입력창 초기화
            $('[name=hidden_id]').val('');
            $('[name=title]').val('');
            $('[name=num]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
        }
        else {
            //수정이라면
            CollectionBoard.update($('[name=hidden_id]').val(),{$set: obj});
            //입력창 초기화
            $('[name=hidden_id]').val('');
            $('[name=title]').val('');
            $('[name=num]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
        }



    },


    'click [name=deleteBoard]': function(e, tmp1) { //매개변수(클릭 요소만 갖음, 클릭요소의 템플릿 전체 갖음)
        //DB지우는 행위
        var id=this._id;
        //var id=$(element.target).attr('id');
        CollectionBoard.remove({_id:this._id})

        //console.log($(element.target).attr('_id'));  //element.target이 클릭된 요소. .attr은 속성을 갖어옴(id, name ...)  여기선 id

        console.log(this._id); //요소 안 이벤트의 클릭을 this라는 객체에 넣어줌. this라는 객체에 요소 속 내용 저장됨.
        console.log('삭제버튼이 눌림'); //삭제버튼 눌리면 콘솔창에 찍힘 

    },


    'click [name=updateBoard]': function(e,tmpq1){
        console.log('수정버튼 눌림');
        //입력모달 띄움
        $('#modal-div').modal('show');

        //모달의 인풋창에 기존 데이터 채워넣음
        //        console.log(this._id);
        //        console.log(this.글번호);
        //        console.log(this.제목);
        //        console.log(this.조회수);
        //        console.log(this.내용);
        $('[name=hidden_id]').val(this._id);
        $('[name=title]').val(this.제목);
        $('[name=num]').val(this.글번호);
        $('[name=count]').val(this.조회수);
        $('[name=content]').val(this.내용);

    }

});

Template.haha.helpers({
    list: function () {

        var result=CollectionBoard.find().fetch()
        console.log(result)

        //        var result= [
        //            {
        //                '글번호': 1,
        //                '제목': "리얼 후기",
        //                '조회수': 62
        //            },
        //            {
        //                '글번호': 2,
        //                '제목': "트랜스포머 후기",
        //                '조회수': 38
        //            },
        //            {
        //                '글번호': 3,
        //                '제목': "스파이더맨 후기",
        //                '조회수': 54
        //            },
        //            {
        //                '글번호': 4,
        //                '제목': "스파이더맨 후기",
        //                '조회수': 12
        //            },
        //            {
        //                '글번호': 5,
        //                '제목': "리얼 후기",
        //                '조회수': 24
        //            }
        //        ]

        return result;

    }
});