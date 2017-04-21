var ActivityIndicator, Button, Component, ExtraIcon, Gender, Icon, KeyboardAvoidingView, ModalPicker, React, Screen, ScrollView, Text, TextInput, TouchableWithoutFeedback, View, WebView, dismissKeyboard, gray, gstyles, nationalities, orange, ref, ref1, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), Text = ref.Text, View = ref.View, TextInput = ref.TextInput, WebView = ref.WebView, TouchableWithoutFeedback = ref.TouchableWithoutFeedback, ActivityIndicator = ref.ActivityIndicator, KeyboardAvoidingView = ref.KeyboardAvoidingView, ScrollView = ref.ScrollView;

Component = (React = require('react')).Component;

Button = require('react-native-material-design').Button;

Icon = require('react-native-vector-icons/MaterialIcons');

ExtraIcon = require('bawadi-client/app/libs/extra-icons');

dismissKeyboard = require('react-native-dismiss-keyboard');

ModalPicker = require('react-native-modal-picker')["default"];

nationalities = require('bawadi-client/app/res/nationalities.json');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

ref1 = require('bawadi-client/app/colors'), orange = ref1.orange, gray = ref1.gray;

Gender = {
  Male: 1,
  Female: 2
};

Screen = (function(superClass) {
  extend(Screen, superClass);

  Screen.prototype.state = {
    phone: null,
    age: "",
    code: null,
    gender: null,
    name: null,
    area: null,
    nationality: null
  };

  function Screen(props) {
    this.hideError = bind(this.hideError, this);
    this.skip = bind(this.skip, this);
    this.getPhone = bind(this.getPhone, this);
    this.sendCode = bind(this.sendCode, this);
    this.verify = bind(this.verify, this);
    this.clearSentState = bind(this.clearSentState, this);
    this.setGender = bind(this.setGender, this);
    this.setArea = bind(this.setArea, this);
    this.setName = bind(this.setName, this);
    this.setAge = bind(this.setAge, this);
    this.setCode = bind(this.setCode, this);
    this.setPhone = bind(this.setPhone, this);
    this.setNationality = bind(this.setNationality, this);
    this.createNationalitiesPicker = bind(this.createNationalitiesPicker, this);
    var ref2, ref3;
    Screen.__super__.constructor.apply(this, arguments);
    this.state = Object.assign(this.state, {
      phone: (ref2 = props.phone) != null ? ref2.slice(1) : void 0,
      age: ((ref3 = props.age) != null ? ref3.toString() : void 0) || "",
      gender: props.gender
    });
  }

  Screen.prototype.componentWillReceiveProps = function(nextProps) {
    var ref2, ref3;
    return this.setState({
      phone: (ref2 = nextProps.phone) != null ? ref2.slice(1) : void 0,
      age: ((ref3 = nextProps.age) != null ? ref3.toString() : void 0) || "",
      gender: nextProps.gender
    });
  };

  Screen.prototype.render = function() {
    var screen;
    if (this.props.codeSent) {
      screen = this.renderVerify();
    } else {
      screen = this.renderUserInfo();
    }
    return <ScrollView style={styles.screen} bounces={false}>
      {screen}
    </ScrollView>;
  };

  Screen.prototype.renderUserInfo = function() {
    return <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={[gstyles.gray, styles.message]}>Please enter your phone.
          We will send verificaction code via sms. Other fields are optional.
          You can help us to improve our service by specifying them.
        </Text>

        <View style={styles.phoneContainer}>
          <Icon name='add' size={24} style={[gstyles.gray, styles.phonePlus]} />
          <TextInput
            value={this.state.phone}
            onChangeText={this.setPhone}
            placeholder="971 50 1234567 *"
            keyboardType='phone-pad'
            onFocus={this.hideError}
            style={styles.phone} />
          { this.props.processing && <ActivityIndicator size='small' style={styles.spinner} /> }
        </View>

        <TextInput
          value={this.state.age}
          onChangeText={this.setAge}
          placeholder="Age"
          keyboardType='numeric'
          onFocus={this.hideError}
          style={styles.age} />

        <TextInput
          value={this.state.name}
          onChangeText={this.setName}
          placeholder="Name"
          onFocus={this.hideError}
          style={styles.name} />

        <TextInput
          value={this.state.area}
          onChangeText={this.setArea}
          placeholder="Area"
          onFocus={this.hideError}
          style={styles.name} />

        {this.createNationalitiesPicker()}

        <View style={styles.gender}>
          <ExtraIcon
            name='male'
            size={48}
            onPress={() => this.setGender(Gender.Male)}
            color={this.state.gender === Gender.Male ? orange : gray} />
          <ExtraIcon
            name='female'
            size={48}
            color={this.state.gender === Gender.Female ? orange : gray}
            onPress={() => this.setGender(Gender.Female)}
            style={styles.female} />
        </View>

        { this.props.error && <Text style={styles.error}>{this.props.error}</Text> }

        <View style={styles.buttonContainer}>
          <Button
            disabled={!this.state.phone || this.props.processing}
            onPress={this.sendCode}
            raised={true}
            overrides={styles.extra.raisedButton}
            text="SIGN UP" />
          <Button
            disabled={this.props.processing}
            onPress={this.skip}
            overrides={styles.extra.textButton}
            text="Register later" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>;
  };

  Screen.prototype.renderVerify = function() {
    return <View style={styles.container}>
      <Text style={[gstyles.gray, styles.message]}>
        Verification code was sent to +{this.state.phone}.
        Try to resend if you will not get it in 3 minutes.
      </Text>

      <View style={styles.codeContainer}>
        <TextInput
          value={this.state.code}
          onChangeText={this.setCode}
          placeholder="1234"
          keyboardType='numeric'
          style={styles.code} />
        { this.props.processing && <ActivityIndicator size='small' style={styles.spinner} /> }
      </View>
      <Text style={styles.error}>{this.props.error}</Text>

      <View style={styles.buttonContainer}>
        <Button
          disabled={!this.state.code || this.props.processing}
          onPress={this.verify}
          raised={true}
          overrides={styles.extra.raisedButton}
          text="VERIFY" />

        <View style={styles.resendContainer}>
          <Button
            disabled={this.props.processing}
            onPress={this.sendCode}
            overrides={styles.extra.textButton}
            text="Resend" />
          <Button
            disabled={this.props.processing}
            onPress={this.clearSentState}
            overrides={styles.extra.textButton}
            text="Change number" />
          <Button
            disabled={this.props.processing}
            onPress={this.skip}
            overrides={styles.extra.textButton}
            text="Register later" />
        </View>
      </View>
    </View>;
  };

  Screen.prototype.createNationalitiesPicker = function() {
    var data;
    data = nationalities.map(function(nationality) {
      var key;
      key = nationality.toLowerCase();
      return {
        key: key,
        label: nationality
      };
    });
    return <ModalPicker
      data={data}
      initValue="Select nationality"
      onChange={this.setNationality}
      style={styles.nationality} />;
  };

  Screen.prototype.setNationality = function(arg) {
    var nationality;
    nationality = arg.key;
    return this.setState({
      nationality: nationality
    });
  };

  Screen.prototype.setPhone = function(phone) {
    return this.setState({
      phone: phone
    });
  };

  Screen.prototype.setCode = function(code) {
    return this.setState({
      code: code
    });
  };

  Screen.prototype.setAge = function(age) {
    if (!isNaN(age) && age.length < 4) {
      return this.setState({
        age: age
      });
    }
  };

  Screen.prototype.setName = function(name) {
    return this.setState({
      name: name
    });
  };

  Screen.prototype.setArea = function(area) {
    return this.setState({
      area: area
    });
  };

  Screen.prototype.setGender = function(gender) {
    return this.setState({
      gender: gender
    });
  };

  Screen.prototype.clearSentState = function() {
    var base;
    return typeof (base = this.props).clearSentState === "function" ? base.clearSentState() : void 0;
  };

  Screen.prototype.verify = function() {
    var base;
    return typeof (base = this.props).verify === "function" ? base.verify(this.getPhone(), this.state.code) : void 0;
  };

  Screen.prototype.sendCode = function() {
    var base, info;
    dismissKeyboard();
    info = {
      phone: this.getPhone(),
      gender: this.state.gender,
      age: parseInt(this.state.age),
      name: this.state.name,
      area: this.state.area,
      nationality: this.state.nationality
    };
    return typeof (base = this.props).sendCode === "function" ? base.sendCode(info) : void 0;
  };

  Screen.prototype.getPhone = function() {
    return "+" + this.state.phone;
  };

  Screen.prototype.skip = function() {
    var base;
    return typeof (base = this.props).onSkip === "function" ? base.onSkip() : void 0;
  };

  Screen.prototype.hideError = function() {
    var base;
    return typeof (base = this.props).clearError === "function" ? base.clearError() : void 0;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9zaWduLXVwL3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9zaWduLXVwL3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSwrUEFBQTtFQUFBOzs7O0FBQUEsTUFTSSxPQUFBLENBQVEsY0FBUixDQVRKLEVBQ0UsZUFERixFQUVFLGVBRkYsRUFHRSx5QkFIRixFQUlFLHFCQUpGLEVBS0UsdURBTEYsRUFNRSx5Q0FORixFQU9FLCtDQVBGLEVBUUU7O0FBRUQsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNiLFNBQVUsT0FBQSxDQUFRLDhCQUFSOztBQUNYLElBQUEsR0FBTyxPQUFBLENBQVEseUNBQVI7O0FBQ1AsU0FBQSxHQUFZLE9BQUEsQ0FBUSxvQ0FBUjs7QUFDWixlQUFBLEdBQWtCLE9BQUEsQ0FBUSwrQkFBUjs7QUFDUixjQUFlLE9BQUEsQ0FBUSwyQkFBUixHQUF4Qjs7QUFDRCxhQUFBLEdBQWdCLE9BQUEsQ0FBUSwwQ0FBUjs7QUFDaEIsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBQ1YsT0FBaUIsT0FBQSxDQUFRLDBCQUFSLENBQWpCLEVBQUMsb0JBQUQsRUFBUzs7QUFHVCxNQUFBLEdBQ0U7RUFBQSxJQUFBLEVBQU0sQ0FBTjtFQUNBLE1BQUEsRUFBUSxDQURSOzs7QUFJSTs7O21CQUNKLEtBQUEsR0FDRTtJQUFBLEtBQUEsRUFBTyxJQUFQO0lBQ0EsR0FBQSxFQUFLLEVBREw7SUFFQSxJQUFBLEVBQU0sSUFGTjtJQUdBLE1BQUEsRUFBUSxJQUhSO0lBSUEsSUFBQSxFQUFNLElBSk47SUFLQSxJQUFBLEVBQU0sSUFMTjtJQU1BLFdBQUEsRUFBYSxJQU5iOzs7RUFVVyxnQkFBQyxLQUFEOzs7Ozs7Ozs7Ozs7Ozs7QUFDWCxRQUFBO0lBQUEseUNBQUEsU0FBQTtJQUNBLElBQUMsQ0FBQSxLQUFELEdB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QUEsS0FBSyxDQUFDLE1BRGY7TUFFQSxHQUFBLEVBQUssUUFBQSxDQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBaEIsQ0FGTDtNQUdBLElBQUEsRUFBTSxJQUFDLENBQUEsS0FBSyxDQUFDLElBSGI7TUFJQSxJQUFBLEVBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUpiO01BS0EsV0FBQSxFQUFhLElBQUMsQ0FBQSxLQUFLLENBQUMsV0FMcEI7O29FQU1JLENBQUMsU0FBVTtFQVRUOzttQkFZVixRQUFBLEdBQVUsU0FBQTtXQUNSLEdBQUEsR0FBSSxJQUFDLENBQUEsS0FBSyxDQUFDO0VBREg7O21CQUlWLElBQUEsR0FBTSxTQUFBO0FBQ0osUUFBQTtrRUFBTSxDQUFDO0VBREg7O21CQUlOLFNBQUEsR0FBVyxTQUFBO0FBQ1QsUUFBQTtzRUFBTSxDQUFDO0VBREU7Ozs7R0F2T1E7O0FBMk9yQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntcbiAgVGV4dFxuICBWaWV3XG4gIFRleHRJbnB1dFxuICBXZWJWaWV3XG4gIFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFja1xuICBBY3Rpdml0eUluZGljYXRvclxuICBLZXlib2FyZEF2b2lkaW5nVmlld1xuICBTY3JvbGxWaWV3XG59ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xue0NvbXBvbmVudH0gPSBSZWFjdCA9IHJlcXVpcmUgJ3JlYWN0J1xue0J1dHRvbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtbWF0ZXJpYWwtZGVzaWduJ1xuSWNvbiA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxJY29ucydcbkV4dHJhSWNvbiA9IHJlcXVpcmUgJ3NyYy9saWJzL2V4dHJhLWljb25zJ1xuZGlzbWlzc0tleWJvYXJkID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLWRpc21pc3Mta2V5Ym9hcmQnXG57ZGVmYXVsdDogTW9kYWxQaWNrZXJ9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLW1vZGFsLXBpY2tlcidcbm5hdGlvbmFsaXRpZXMgPSByZXF1aXJlICdzcmMvcmVzL25hdGlvbmFsaXRpZXMuanNvbidcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG57b3JhbmdlLCBncmF5fSA9IHJlcXVpcmUgJ3NyYy9jb2xvcnMnXG5cblxuR2VuZGVyID1cbiAgTWFsZTogMVxuICBGZW1hbGU6IDJcblxuXG5jbGFzcyBTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnRcbiAgc3RhdGU6XG4gICAgcGhvbmU6IG51bGxcbiAgICBhZ2U6IFwiXCJcbiAgICBjb2RlOiBudWxsXG4gICAgZ2VuZGVyOiBudWxsXG4gICAgbmFtZTogbnVsbFxuICAgIGFyZWE6IG51bGxcbiAgICBuYXRpb25hbGl0eTogbnVsbFxuXG5cblxuICBjb25zdHJ1Y3RvcjogKHByb3BzKSAtPlxuICAgIHN1cGVyXG4gICAgQHN0YXRlID0gT2JqZWN0LmFzc2lnbiBAc3RhdGUsXG4gICAgICBwaG9uZTogcHJvcHMucGhvbmU/WzEuLl1cbiAgICAgIGFnZTogcHJvcHMuYWdlPy50b1N0cmluZygpIG9yIFwiXCJcbiAgICAgIGdlbmRlcjogcHJvcHMuZ2VuZGVyXG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIEBzZXRTdGF0ZVxuICAgICAgcGhvbmU6IG5leHRQcm9wcy5waG9uZT9bMS4uXVxuICAgICAgYWdlOiBuZXh0UHJvcHMuYWdlPy50b1N0cmluZygpIG9yIFwiXCJcbiAgICAgIGdlbmRlcjogbmV4dFByb3BzLmdlbmRlclxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGlmIEBwcm9wcy5jb2RlU2VudFxuICAgICAgc2NyZWVuID0gQHJlbmRlclZlcmlmeSgpXG4gICAgZWxzZVxuICAgICAgc2NyZWVuID0gQHJlbmRlclVzZXJJbmZvKClcblxuICAgIGA8U2Nyb2xsVmlldyBzdHlsZT17c3R5bGVzLnNjcmVlbn0gYm91bmNlcz17ZmFsc2V9PlxuICAgICAge3NjcmVlbn1cbiAgICA8L1Njcm9sbFZpZXc+YFxuXG5cbiAgcmVuZGVyVXNlckluZm86IC0+XG4gICAgYDxUb3VjaGFibGVXaXRob3V0RmVlZGJhY2sgb25QcmVzcz17ZGlzbWlzc0tleWJvYXJkfT5cbiAgICAgIDxLZXlib2FyZEF2b2lkaW5nVmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZXMubWVzc2FnZV19PlBsZWFzZSBlbnRlciB5b3VyIHBob25lLlxuICAgICAgICAgIFdlIHdpbGwgc2VuZCB2ZXJpZmljYWN0aW9uIGNvZGUgdmlhIHNtcy4gT3RoZXIgZmllbGRzIGFyZSBvcHRpb25hbC5cbiAgICAgICAgICBZb3UgY2FuIGhlbHAgdXMgdG8gaW1wcm92ZSBvdXIgc2VydmljZSBieSBzcGVjaWZ5aW5nIHRoZW0uXG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnBob25lQ29udGFpbmVyfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPSdhZGQnIHNpemU9ezI0fSBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLnBob25lUGx1c119IC8+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmV9XG4gICAgICAgICAgICBvbkNoYW5nZVRleHQ9e3RoaXMuc2V0UGhvbmV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjk3MSA1MCAxMjM0NTY3ICpcIlxuICAgICAgICAgICAga2V5Ym9hcmRUeXBlPSdwaG9uZS1wYWQnXG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhpZGVFcnJvcn1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMucGhvbmV9IC8+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLnByb2Nlc3NpbmcgJiYgPEFjdGl2aXR5SW5kaWNhdG9yIHNpemU9J3NtYWxsJyBzdHlsZT17c3R5bGVzLnNwaW5uZXJ9IC8+IH1cbiAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2V9XG4gICAgICAgICAgb25DaGFuZ2VUZXh0PXt0aGlzLnNldEFnZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXG4gICAgICAgICAga2V5Ym9hcmRUeXBlPSdudW1lcmljJ1xuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGlkZUVycm9yfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYWdlfSAvPlxuXG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlVGV4dD17dGhpcy5zZXROYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oaWRlRXJyb3J9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5uYW1lfSAvPlxuXG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hcmVhfVxuICAgICAgICAgIG9uQ2hhbmdlVGV4dD17dGhpcy5zZXRBcmVhfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXJlYVwiXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oaWRlRXJyb3J9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5uYW1lfSAvPlxuXG4gICAgICAgIHt0aGlzLmNyZWF0ZU5hdGlvbmFsaXRpZXNQaWNrZXIoKX1cblxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmdlbmRlcn0+XG4gICAgICAgICAgPEV4dHJhSWNvblxuICAgICAgICAgICAgbmFtZT0nbWFsZSdcbiAgICAgICAgICAgIHNpemU9ezQ4fVxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gdGhpcy5zZXRHZW5kZXIoR2VuZGVyLk1hbGUpfVxuICAgICAgICAgICAgY29sb3I9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSBHZW5kZXIuTWFsZSA/IG9yYW5nZSA6IGdyYXl9IC8+XG4gICAgICAgICAgPEV4dHJhSWNvblxuICAgICAgICAgICAgbmFtZT0nZmVtYWxlJ1xuICAgICAgICAgICAgc2l6ZT17NDh9XG4gICAgICAgICAgICBjb2xvcj17dGhpcy5zdGF0ZS5nZW5kZXIgPT09IEdlbmRlci5GZW1hbGUgPyBvcmFuZ2UgOiBncmF5fVxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gdGhpcy5zZXRHZW5kZXIoR2VuZGVyLkZlbWFsZSl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmZlbWFsZX0gLz5cbiAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgIHsgdGhpcy5wcm9wcy5lcnJvciAmJiA8VGV4dCBzdHlsZT17c3R5bGVzLmVycm9yfT57dGhpcy5wcm9wcy5lcnJvcn08L1RleHQ+IH1cblxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnBob25lIHx8IHRoaXMucHJvcHMucHJvY2Vzc2luZ31cbiAgICAgICAgICAgIG9uUHJlc3M9e3RoaXMuc2VuZENvZGV9XG4gICAgICAgICAgICByYWlzZWQ9e3RydWV9XG4gICAgICAgICAgICBvdmVycmlkZXM9e3N0eWxlcy5leHRyYS5yYWlzZWRCdXR0b259XG4gICAgICAgICAgICB0ZXh0PVwiU0lHTiBVUFwiIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMucHJvY2Vzc2luZ31cbiAgICAgICAgICAgIG9uUHJlc3M9e3RoaXMuc2tpcH1cbiAgICAgICAgICAgIG92ZXJyaWRlcz17c3R5bGVzLmV4dHJhLnRleHRCdXR0b259XG4gICAgICAgICAgICB0ZXh0PVwiUmVnaXN0ZXIgbGF0ZXJcIiAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L0tleWJvYXJkQXZvaWRpbmdWaWV3PlxuICAgIDwvVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrPmBcblxuXG4gIHJlbmRlclZlcmlmeTogLT5cbiAgICBgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFRleHQgc3R5bGU9e1tnc3R5bGVzLmdyYXksIHN0eWxlcy5tZXNzYWdlXX0+XG4gICAgICAgIFZlcmlmaWNhdGlvbiBjb2RlIHdhcyBzZW50IHRvICt7dGhpcy5zdGF0ZS5waG9uZX0uXG4gICAgICAgIFRyeSB0byByZXNlbmQgaWYgeW91IHdpbGwgbm90IGdldCBpdCBpbiAzIG1pbnV0ZXMuXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29kZUNvbnRhaW5lcn0+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb2RlfVxuICAgICAgICAgIG9uQ2hhbmdlVGV4dD17dGhpcy5zZXRDb2RlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNFwiXG4gICAgICAgICAga2V5Ym9hcmRUeXBlPSdudW1lcmljJ1xuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuY29kZX0gLz5cbiAgICAgICAgeyB0aGlzLnByb3BzLnByb2Nlc3NpbmcgJiYgPEFjdGl2aXR5SW5kaWNhdG9yIHNpemU9J3NtYWxsJyBzdHlsZT17c3R5bGVzLnNwaW5uZXJ9IC8+IH1cbiAgICAgIDwvVmlldz5cbiAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuZXJyb3J9Pnt0aGlzLnByb3BzLmVycm9yfTwvVGV4dD5cblxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmNvZGUgfHwgdGhpcy5wcm9wcy5wcm9jZXNzaW5nfVxuICAgICAgICAgIG9uUHJlc3M9e3RoaXMudmVyaWZ5fVxuICAgICAgICAgIHJhaXNlZD17dHJ1ZX1cbiAgICAgICAgICBvdmVycmlkZXM9e3N0eWxlcy5leHRyYS5yYWlzZWRCdXR0b259XG4gICAgICAgICAgdGV4dD1cIlZFUklGWVwiIC8+XG5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yZXNlbmRDb250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLnByb2Nlc3Npbmd9XG4gICAgICAgICAgICBvblByZXNzPXt0aGlzLnNlbmRDb2RlfVxuICAgICAgICAgICAgb3ZlcnJpZGVzPXtzdHlsZXMuZXh0cmEudGV4dEJ1dHRvbn1cbiAgICAgICAgICAgIHRleHQ9XCJSZXNlbmRcIiAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLnByb2Nlc3Npbmd9XG4gICAgICAgICAgICBvblByZXNzPXt0aGlzLmNsZWFyU2VudFN0YXRlfVxuICAgICAgICAgICAgb3ZlcnJpZGVzPXtzdHlsZXMuZXh0cmEudGV4dEJ1dHRvbn1cbiAgICAgICAgICAgIHRleHQ9XCJDaGFuZ2UgbnVtYmVyXCIgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5wcm9jZXNzaW5nfVxuICAgICAgICAgICAgb25QcmVzcz17dGhpcy5za2lwfVxuICAgICAgICAgICAgb3ZlcnJpZGVzPXtzdHlsZXMuZXh0cmEudGV4dEJ1dHRvbn1cbiAgICAgICAgICAgIHRleHQ9XCJSZWdpc3RlciBsYXRlclwiIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICA8L1ZpZXc+YFxuXG5cbiAgY3JlYXRlTmF0aW9uYWxpdGllc1BpY2tlcjogPT5cbiAgICBkYXRhID0gbmF0aW9uYWxpdGllcy5tYXAgKG5hdGlvbmFsaXR5KSAtPlxuICAgICAga2V5ID0gbmF0aW9uYWxpdHkudG9Mb3dlckNhc2UoKVxuICAgICAge2tleSwgbGFiZWw6IG5hdGlvbmFsaXR5fVxuXG4gICAgYDxNb2RhbFBpY2tlclxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIGluaXRWYWx1ZT1cIlNlbGVjdCBuYXRpb25hbGl0eVwiXG4gICAgICBvbkNoYW5nZT17dGhpcy5zZXROYXRpb25hbGl0eX1cbiAgICAgIHN0eWxlPXtzdHlsZXMubmF0aW9uYWxpdHl9IC8+YFxuXG5cbiAgc2V0TmF0aW9uYWxpdHk6ICh7a2V5OiBuYXRpb25hbGl0eX0pID0+XG4gICAgQHNldFN0YXRlKHtuYXRpb25hbGl0eX0pXG5cbiAgICBcbiAgc2V0UGhvbmU6IChwaG9uZSkgPT5cbiAgICBAc2V0U3RhdGUoe3Bob25lfSlcblxuXG4gIHNldENvZGU6IChjb2RlKSA9PlxuICAgIEBzZXRTdGF0ZSh7Y29kZX0pXG5cblxuICBzZXRBZ2U6IChhZ2UpID0+XG4gICAgaWYgbm90IGlzTmFOKGFnZSkgYW5kIGFnZS5sZW5ndGggPCA0XG4gICAgICBAc2V0U3RhdGUoe2FnZX0pXG5cblxuICBzZXROYW1lOiAobmFtZSkgPT5cbiAgICBAc2V0U3RhdGUoe25hbWV9KVxuXG5cbiAgc2V0QXJlYTogKGFyZWEpID0+XG4gICAgQHNldFN0YXRlKHthcmVhfSlcblxuXG4gIHNldEdlbmRlcjogKGdlbmRlcikgPT5cbiAgICBAc2V0U3RhdGUoe2dlbmRlcn0pXG5cblxuICBjbGVhclNlbnRTdGF0ZTogPT5cbiAgICBAcHJvcHMuY2xlYXJTZW50U3RhdGU/KClcblxuXG4gIHZlcmlmeTogPT5cbiAgICBAcHJvcHMudmVyaWZ5PyhAZ2V0UGhvbmUoKSwgdGhpcy5zdGF0ZS5jb2RlKVxuXG5cbiAgc2VuZENvZGU6ID0+XG4gICAgZGlzbWlzc0tleWJvYXJkKClcbiAgICBpbmZvID1cbiAgICAgIHBob25lOiBAZ2V0UGhvbmUoKVxuICAgICAgZ2VuZGVyOiBAc3RhdGUuZ2VuZGVyXG4gICAgICBhZ2U6IHBhcnNlSW50KEBzdGF0ZS5hZ2UpXG4gICAgICBuYW1lOiBAc3RhdGUubmFtZVxuICAgICAgYXJlYTogQHN0YXRlLmFyZWFcbiAgICAgIG5hdGlvbmFsaXR5OiBAc3RhdGUubmF0aW9uYWxpdHlcbiAgICBAcHJvcHMuc2VuZENvZGU/KGluZm8pXG5cblxuICBnZXRQaG9uZTogPT5cbiAgICBcIisje0BzdGF0ZS5waG9uZX1cIlxuXG5cbiAgc2tpcDogPT5cbiAgICBAcHJvcHMub25Ta2lwPygpXG5cblxuICBoaWRlRXJyb3I6ID0+XG4gICAgQHByb3BzLmNsZWFyRXJyb3I/KClcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
