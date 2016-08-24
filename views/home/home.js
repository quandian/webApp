angular.module("myapp")
    .controller("homeCtrl",function($scope,$http,$ionicSlideBoxDelegate, $ionicModal){
    $http.get("json/topbanner.json").success(function(data){
        $scope.topbanners=data.topbanner;
        $scope.homejx=data.homejx;
        $scope.xiums=data.xiums;
        $scope.topbannerpics=data.topbannerpic;
    });
        //
        // $scope.takePhoto=function(){
        //     var options = {
        //         //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
        //         quality: 100,                                            //相片质量0-100
        //         destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
        //         sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
        //         allowEdit: false,                                        //在选择之前允许修改截图
        //         encodingType:Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
        //         targetWidth: 200,                                        //照片宽度
        //         targetHeight: 200,                                       //照片高度
        //         mediaType:0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
        //         cameraDirection:0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
        //         popoverOptions: CameraPopoverOptions,
        //         saveToPhotoAlbum: true                                   //保存进手机相册
        //     };
        //
        //     $cordovaCamera.getPicture(options).then(function(imageData) {
        //         CommonJs.AlertPopup(imageData);
        //         var image = document.getElementById('myImage');
        //         image.src=imageData;
        //         //image.src = "data:image/jpeg;base64," + imageData;
        //     }, function(err) {
        //         // error
        //         CommonJs.AlertPopup(err.message);
        //     });
        //
        // };

    $scope.praise=function(index){
            $scope.i=index
            $scope.homejx[index].like++;
            $scope.addred=function(index){
               return $scope.i==index?"redclass":""
           }

    };

    $scope.slideIndex=0;
    $scope.slideChanged=function(index){
        $scope.slideIndex=index;
    };

    $scope.addClass=function(index){
        return index==$scope.slideIndex?"current col col-20 col-offset-20 text-center":"col col-20 col-offset-20 text-center"
    };
    $scope.activeSlide=function(index){
        $ionicSlideBoxDelegate.$getByHandle("bottom").slide(index)
    };

    $scope.loadMore=function(){
        var newjx={
            "imgsrc": "images/home/cont4.jpg",
            "content": "夏日炎炎，不想在厨房热火流汗地炒菜？推荐一道方便可口又赏心悦目的夏日小菜--丝瓜酿虾。",
            "like": 5,
            "comment": 8,
            "done": 50
        };
        setTimeout(function(){
            $scope.homejx.push(newjx);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        },3000)
    };

    $ionicModal.fromTemplateUrl('views/modal/modal.html', {
        scope: $scope,      // 作用域使用父作用域
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

})