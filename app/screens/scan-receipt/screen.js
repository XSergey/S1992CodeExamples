var ActivityIndicator, Button, Camera, Component, FS, Icon, Image, Modal, React, Screen, TouchableOpacity, View, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), ActivityIndicator = ref.ActivityIndicator, View = ref.View, TouchableOpacity = ref.TouchableOpacity, Image = ref.Image;

Component = (React = require('react')).Component;

Camera = require('react-native-camera')["default"];

FS = require('react-native-fs');

Icon = require('react-native-vector-icons/MaterialIcons');

Modal = require('react-native-modalbox');

Button = require('../_common/button');

styles = require('./styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    this.takeNew = bind(this.takeNew, this);
    this.send = bind(this.send, this);
    this.takePicture = bind(this.takePicture, this);
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.prototype.state = {
    image: null
  };

  Screen.prototype.render = function() {
    var showPreview;
    showPreview = this.state.image != null;
    return <View style={styles.container}>
      <Camera
        ref={c => this.camera = c}
        captureTarget={Camera.constants.CaptureTarget.temp}
        captureQuality='medium'
        captureAudio={false}
        style={styles.capturePreview} />

      <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
        <Icon name='photo-camera' size={48} color='white' style={styles.icon} />
      </TouchableOpacity>

      <Modal position='center' isOpen={showPreview} style={styles.modal}>
        <View style={styles.previewContainer}>
          <Image source={{uri: 'data:;base64,' + this.state.image}} style={styles.preview}></Image>
          <Button
            title={this.props.sending ? "Sending" : "Send"}
            disabled={this.props.sending}
            style={styles.button}
            onPress={this.send}
          >
            { this.props.sending &&
              <ActivityIndicator
                color='white'
                size='small'
                style={styles.spinner} />
            }
          </Button>
          <Button title="Take new" style={styles.button} onPress={this.takeNew} />
        </View>
      </Modal>
    </View>;
  };

  Screen.prototype.takePicture = function() {
    return this.camera.capture().then((function(_this) {
      return function(arg) {
        var path;
        path = arg.path;
        path = path.replace('file://', '');
        return FS.readFile(path, 'base64').then(function(base64) {
          return _this.setState({
            image: base64
          });
        });
      };
    })(this))["catch"](function(e) {
      return console.error(e);
    });
  };

  Screen.prototype.send = function() {
    var base;
    return typeof (base = this.props).onSend === "function" ? base.onSend(this.state.image) : void 0;
  };

  Screen.prototype.takeNew = function() {
    return this.setState({
      image: null
    });
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9zY2FuLXJlY2VpcHQvc2NyZWVuLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3NjYW4tcmVjZWlwdC9zY3JlZW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsd0hBQUE7RUFBQTs7OztBQUFBLE1BQXFELE9BQUEsQ0FBUSxjQUFSLENBQXJELEVBQUMseUNBQUQsRUFBb0IsZUFBcEIsRUFBMEIsdUNBQTFCLEVBQTRDOztBQUMzQyxZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ0osU0FBVSxPQUFBLENBQVEscUJBQVIsR0FBbkI7O0FBQ0QsRUFBQSxHQUFLLE9BQUEsQ0FBUSxpQkFBUjs7QUFDTCxJQUFBLEdBQU8sT0FBQSxDQUFRLHlDQUFSOztBQUNQLEtBQUEsR0FBUSxPQUFBLENBQVEsdUJBQVI7O0FBQ1IsTUFBQSxHQUFTLE9BQUEsQ0FBUSxtQkFBUjs7QUFDVCxNQUFBLEdBQVMsT0FBQSxDQUFRLFVBQVI7O0FBR0g7Ozs7Ozs7Ozs7bUJBQ0osS0FBQSxHQUNFO0lBQUEsS0FBQSxFQUFPLElBQVA7OzttQkFHRixNQUFBLEdBQVEsU0FBQTtBQUNOLFFBQUE7SUFBQSxXQUFBLEdBQWM7V0FFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFITTs7bUJBcUNSLFdBQUEsR0FBYSxTQUFBO1dBQ1gsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFSLENBQUEsQ0FDRSxDQUFDLElBREgsQ0FDUSxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsR0FBRDtBQUNKLFlBQUE7UUFETSxPQUFEO1FBQ0wsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBYixFQUF3QixFQUF4QjtlQUNQLEVBQUUsQ0FBQyxRQUFILENBQVksSUFBWixFQUFrQixRQUFsQixDQUEyQixDQUFDLElBQTVCLENBQWlDLFNBQUMsTUFBRDtpQkFDL0IsS0FBQyxDQUFBLFFBQUQsQ0FBVTtZQUFBLEtBQUEsRUFBTyxNQUFQO1dBQVY7UUFEK0IsQ0FBakM7TUFGSTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FEUixDQUtFLEVBQUMsS0FBRCxFQUxGLENBS1MsU0FBQyxDQUFEO2FBQU8sT0FBTyxDQUFDLEtBQVIsQ0FBYyxDQUFkO0lBQVAsQ0FMVDtFQURXOzttQkFTYixJQUFBLEdBQU0sU0FBQTtBQUNKLFFBQUE7a0VBQU0sQ0FBQyxPQUFRLElBQUMsQ0FBQSxLQUFLLENBQUM7RUFEbEI7O21CQUlOLE9BQUEsR0FBUyxTQUFBO1dBQ1AsSUFBQyxDQUFBLFFBQUQsQ0FBVTtNQUFBLEtBQUEsRUFBTyxJQUFQO0tBQVY7RUFETzs7OztHQXZEVTs7QUEyRHJCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsie0FjdGl2aXR5SW5kaWNhdG9yLCBWaWV3LCBUb3VjaGFibGVPcGFjaXR5LCBJbWFnZX0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG57ZGVmYXVsdDogQ2FtZXJhfSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1jYW1lcmEnXG5GUyA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1mcydcbkljb24gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtdmVjdG9yLWljb25zL01hdGVyaWFsSWNvbnMnXG5Nb2RhbCA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1tb2RhbGJveCdcbkJ1dHRvbiA9IHJlcXVpcmUgJy4uL19jb21tb24vYnV0dG9uJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5cblxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIHN0YXRlOlxuICAgIGltYWdlOiBudWxsXG5cblxuICByZW5kZXI6IC0+XG4gICAgc2hvd1ByZXZpZXcgPSBAc3RhdGUuaW1hZ2U/XG5cbiAgICBgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPENhbWVyYVxuICAgICAgICByZWY9e2MgPT4gdGhpcy5jYW1lcmEgPSBjfVxuICAgICAgICBjYXB0dXJlVGFyZ2V0PXtDYW1lcmEuY29uc3RhbnRzLkNhcHR1cmVUYXJnZXQudGVtcH1cbiAgICAgICAgY2FwdHVyZVF1YWxpdHk9J21lZGl1bSdcbiAgICAgICAgY2FwdHVyZUF1ZGlvPXtmYWxzZX1cbiAgICAgICAgc3R5bGU9e3N0eWxlcy5jYXB0dXJlUHJldmlld30gLz5cblxuICAgICAgPFRvdWNoYWJsZU9wYWNpdHkgb25QcmVzcz17dGhpcy50YWtlUGljdHVyZX0gc3R5bGU9e3N0eWxlcy5jYXB0dXJlfT5cbiAgICAgICAgPEljb24gbmFtZT0ncGhvdG8tY2FtZXJhJyBzaXplPXs0OH0gY29sb3I9J3doaXRlJyBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG5cbiAgICAgIDxNb2RhbCBwb3NpdGlvbj0nY2VudGVyJyBpc09wZW49e3Nob3dQcmV2aWV3fSBzdHlsZT17c3R5bGVzLm1vZGFsfT5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5wcmV2aWV3Q29udGFpbmVyfT5cbiAgICAgICAgICA8SW1hZ2Ugc291cmNlPXt7dXJpOiAnZGF0YTo7YmFzZTY0LCcgKyB0aGlzLnN0YXRlLmltYWdlfX0gc3R5bGU9e3N0eWxlcy5wcmV2aWV3fT48L0ltYWdlPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnNlbmRpbmcgPyBcIlNlbmRpbmdcIiA6IFwiU2VuZFwifVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuc2VuZGluZ31cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgb25QcmVzcz17dGhpcy5zZW5kfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5zZW5kaW5nICYmXG4gICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvclxuICAgICAgICAgICAgICAgIGNvbG9yPSd3aGl0ZSdcbiAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLnNwaW5uZXJ9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIlRha2UgbmV3XCIgc3R5bGU9e3N0eWxlcy5idXR0b259IG9uUHJlc3M9e3RoaXMudGFrZU5ld30gLz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1ZpZXc+YFxuXG5cbiAgdGFrZVBpY3R1cmU6ID0+XG4gICAgQGNhbWVyYS5jYXB0dXJlKClcbiAgICAgIC50aGVuICh7cGF0aH0pID0+XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJ2ZpbGU6Ly8nLCAnJylcbiAgICAgICAgRlMucmVhZEZpbGUocGF0aCwgJ2Jhc2U2NCcpLnRoZW4gKGJhc2U2NCkgPT5cbiAgICAgICAgICBAc2V0U3RhdGUoaW1hZ2U6IGJhc2U2NClcbiAgICAgIC5jYXRjaCAoZSkgLT4gY29uc29sZS5lcnJvcihlKVxuXG5cbiAgc2VuZDogPT5cbiAgICBAcHJvcHMub25TZW5kPyhAc3RhdGUuaW1hZ2UpXG5cblxuICB0YWtlTmV3OiA9PlxuICAgIEBzZXRTdGF0ZShpbWFnZTogbnVsbClcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
