// butter.js

(function(root){
    var Butter = function() {

        var self = this;

        this.defaults = {
            wrapperId: 'butter',
            wrapperDamper: 0.07,
            cancelOnTouch: false
        }
        
        this.validateOptions = function(ops) {
            for (var prop in ops) {
                if (self.defaults.hasOwnProperty(prop)) {
                    Object.defineProperty(self.defaults, prop, {value: Object.getOwnPropertyDescriptor(ops, prop).value})
                }
            }
        }

        this.wrapperDamper;
        this.wrapperId;
        this.cancelOnTouch;
        this.wrapper;
        this.wrapperOffset = 0;
        this.animateId;
        this.resizing = false;
        this.active = false;
        this.wrapperHeight;
        this.bodyHeight;
    };

    Butter.prototype = {

        init: function(options) {
            if (options) {
                this.validateOptions(options);
            }

            this.active = true;
            this.resizing = false;
            this.wrapperDamper = this.defaults.wrapperDamper;
            this.wrapperId = this.defaults.wrapperId;
            this.cancelOnTouch = this.defaults.cancelOnTouch;

            this.wrapper = document.getElementById(this.wrapperId);
            this.wrapper.style.position = 'fixed';
            this.wrapper.style.width = '100%';

            this.wrapperHeight = this.wrapper.clientHeight;
            document.body.style.height = this.wrapperHeight + 'px';

            window.addEventListener('resize', this.resize.bind(this));
            if (this.cancelOnTouch) {
                window.addEventListener('touchstart', this.cancel.bind(this));
            }
            this.wrapperOffset = 0.0;
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));

            // window.addEventListener('load', this.resize.bind(this));
        },

        wrapperUpdate: function() {
            var scrollY = (document.scrollingElement != undefined) ? document.scrollingElement.scrollTop : (document.documentElement.scrollTop || 0.0);
            this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;
            this.wrapper.style.transform = 'translate3d(0,' + (-this.wrapperOffset.toFixed(2)) + 'px, 0)';
        },

        checkResize: function() {
            if (this.wrapperHeight != this.wrapper.clientHeight) {
                this.resize();
            }
        },

        resize: function() {
            var self = this;
            if (!self.resizing) {
                self.resizing = true;
                window.cancelAnimationFrame(self.animateId);
                window.setTimeout(function() {
                    self.wrapperHeight = self.wrapper.clientHeight;
                    if (parseInt(document.body.style.height) != parseInt(self.wrapperHeight)) {
                        document.body.style.height = self.wrapperHeight + 'px';
                    }
                    self.animateId = window.requestAnimationFrame(self.animate.bind(self));
                    self.resizing = false;
                }, 150)
            }
        },

        animate: function() {
            this.checkResize();
            this.wrapperUpdate();
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));
        },

        cancel: function() {
            if (this.active) {
                window.cancelAnimationFrame(this.animateId);

                window.removeEventListener('resize', this.resize);
                window.removeEventListener('touchstart', this.cancel);
                this.wrapper.removeAttribute('style');
                document.body.removeAttribute('style');

                this.active = false;
                this.wrapper = "";
                this.wrapperOffset = 0;
                this.resizing = true;
                this.animateId = "";
            }
        },
    };

    root.butter = new Butter();

})(this);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvc2Nyb2xsL2J1dHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBidXR0ZXIuanNcblxuKGZ1bmN0aW9uKHJvb3Qpe1xuICAgIHZhciBCdXR0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHdyYXBwZXJJZDogJ2J1dHRlcicsXG4gICAgICAgICAgICB3cmFwcGVyRGFtcGVyOiAwLjA3LFxuICAgICAgICAgICAgY2FuY2VsT25Ub3VjaDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy52YWxpZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbihvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZGVmYXVsdHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuZGVmYXVsdHMsIHByb3AsIHt2YWx1ZTogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcHMsIHByb3ApLnZhbHVlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXBwZXJEYW1wZXI7XG4gICAgICAgIHRoaXMud3JhcHBlcklkO1xuICAgICAgICB0aGlzLmNhbmNlbE9uVG91Y2g7XG4gICAgICAgIHRoaXMud3JhcHBlcjtcbiAgICAgICAgdGhpcy53cmFwcGVyT2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5hbmltYXRlSWQ7XG4gICAgICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53cmFwcGVySGVpZ2h0O1xuICAgICAgICB0aGlzLmJvZHlIZWlnaHQ7XG4gICAgfTtcblxuICAgIEJ1dHRlci5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyRGFtcGVyID0gdGhpcy5kZWZhdWx0cy53cmFwcGVyRGFtcGVyO1xuICAgICAgICAgICAgdGhpcy53cmFwcGVySWQgPSB0aGlzLmRlZmF1bHRzLndyYXBwZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsT25Ub3VjaCA9IHRoaXMuZGVmYXVsdHMuY2FuY2VsT25Ub3VjaDtcblxuICAgICAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy53cmFwcGVySWQpO1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS53aWR0aCA9ICcxMDAlJztcblxuICAgICAgICAgICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy53cmFwcGVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gdGhpcy53cmFwcGVySGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FuY2VsT25Ub3VjaCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndyYXBwZXJPZmZzZXQgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHdyYXBwZXJVcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFkgPSAoZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCAhPSB1bmRlZmluZWQpID8gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCAwLjApO1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyT2Zmc2V0ICs9IChzY3JvbGxZIC0gdGhpcy53cmFwcGVyT2Zmc2V0KSAqIHRoaXMud3JhcHBlckRhbXBlcjtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKC10aGlzLndyYXBwZXJPZmZzZXQudG9GaXhlZCgyKSkgKyAncHgsIDApJztcbiAgICAgICAgfSxcblxuICAgICAgICBjaGVja1Jlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cmFwcGVySGVpZ2h0ICE9IHRoaXMud3JhcHBlci5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXNlbGYucmVzaXppbmcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRlSWQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXJIZWlnaHQgPSBzZWxmLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQpICE9IHBhcnNlSW50KHNlbGYud3JhcHBlckhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gc2VsZi53cmFwcGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFuaW1hdGVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRlLmJpbmQoc2VsZikpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgMTUwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFuaW1hdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1Jlc2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlSWQpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuY2FuY2VsKTtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlck9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlSWQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LmJ1dHRlciA9IG5ldyBCdXR0ZXIoKTtcblxufSkodGhpcyk7Il0sImZpbGUiOiJsaWIvc2Nyb2xsL2J1dHRlci5qcyJ9