new Vue({
    el: '#app',
    data: {
        tampilVideo: true,
        tampilDesign: true,
        tampilUndangan: true,
        tampilVideoMotion: true,
        tampilCV: true,
        tampilSertifikat: true,
        tampilLogo: true,
        tampilPoster: true,
        tampilDesignSub: false
    },
    methods: {
        menu1() {
            this.tampilDesign = true;
            this.tampilVideo = false;
            this.tampilUndangan = false;
            this.tampilVideoMotion = false;
            this.tampilDesignSub = true;
        },
        menu2() {
            this.tampilDesign = false;
            this.tampilVideo = true;
            this.tampilUndangan = false;
            this.tampilVideoMotion = false;
            this.tampilDesignSub = false;
        },
        menu3() {
            this.tampilDesign = false;
            this.tampilVideo = false;
            this.tampilUndangan = true;
            this.tampilVideoMotion = false;
            this.tampilDesignSub = false;
        },
        menu4() {
            this.tampilDesign = false;
            this.tampilVideo = false;
            this.tampilUndangan = false;
            this.tampilVideoMotion = true;
            this.tampilDesignSub = false;
        },
        showAll() {
            this.tampilDesign = true;
            this.tampilVideo = true;
            this.tampilUndangan = true;
            this.tampilVideoMotion = true;
            this.tampilDesignSub = false;
        },
        showAllSub() {
            this.tampilCV = true;
            this.tampilSertifikat = true;
            this.tampilPoster = true;
            this.tampilLogo = true;
        },
        showCV() {
            this.tampilCV = true;
            this.tampilSertifikat = false;
            this.tampilPoster = false;
            this.tampilLogo = false;
        },
        showSertifikat() {
            this.tampilCV = false;
            this.tampilSertifikat = true;
            this.tampilPoster = false;
            this.tampilLogo = false;
        },
        showPoster() {
            this.tampilCV = false;
            this.tampilSertifikat = false;
            this.tampilPoster = true;
            this.tampilLogo = false;
        },
        showLogo() {
            this.tampilCV = false;
            this.tampilSertifikat = false;
            this.tampilPoster = false;
            this.tampilLogo = true;
        }
    }
})