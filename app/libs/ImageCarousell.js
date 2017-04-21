import React, { PropTypes, Component } from 'react';
import {
  View,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';


export default class ImageCarousell extends Component {
  static propTypes = {
    dataSource: PropTypes.instanceOf(ListView.DataSource).isRequired,
    initialIndex: PropTypes.number,
    showPreview: PropTypes.bool,
    previewImageSize: PropTypes.number,
    renderScrollComponent: PropTypes.func,
    style: View.propTypes.style,
    previewContainerStyle: View.propTypes.style,
    imageStyle: View.propTypes.style,
    previewImageStyle: View.propTypes.style,
    width: PropTypes.number,
    height: PropTypes.number,
    getImageSourceFromDataSource: PropTypes.func,
  };

  static defaultProps = {
    initialIndex: 0,
    showPreview: true,
    previewImageSize: 80,
    renderScrollComponent: (props) => <ScrollView {...props} />,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    getImageSourceFromDataSource: (row) => row,
  };

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handlePreviewLayout = this.handlePreviewLayout.bind(this);
    this.renderScrollComponent = this.renderScrollComponent.bind(this);
    this.renderImageView = this.renderImageView.bind(this);
    this.renderImagePreview = this.renderImagePreview.bind(this);
    this._bias = 0;
    this._previewOffset = 0;
    this._refListView = null;
    this._refPreviewListView = null;
    this.state = {
      showPreview: props.showPreview,
      timer: null,
    };
  }

  componentDidMount() {
    this.refresh();
    this.setState({
        sliderOffset: 0,
        timer:
      setInterval( () => {
          if(this._refListView){
              if(Number(this.state.sliderOffset) === this.state.sliderOffset){
                  var NewOffset = Number(this.state.sliderOffset) + Dimensions.get('window').width;
              } else {
                  var NewOffset = 0;
              }
              if(this.state.sliderOffset === 0){
                  this.state.sliderOffset = 1;
                  this._refListView.scrollTo({ x: 0, animated: false });
              } else {
                  this._refListView.scrollTo({ x: NewOffset, animated: true });
              }
          }
          },5000)
      });
  }
  componentWillUnmount(){
      clearInterval(this.state.timer);
      this.setState({timer: null});
  }

  componentWillReceiveProps() {
    this.refresh();
  }

  refresh() {
      this._refListView.scrollTo({ x: initialIndex * width, animated: true });
    const { initialIndex, previewImageSize, width } = this.props;

    if (this._refPreviewListView != null) {
      this._refPreviewListView.scrollTo({
        x: ((initialIndex - 2) * previewImageSize) + this._bias,
        animated: false,
      });
    }
  }

  handleScroll(e) {
    const event = e.nativeEvent;
    var offset = e.nativeEvent.contentOffset.x;
    var width = Dimensions.get('window').width;
    if(Math.ceil(offset/width) >= this._refListView._prevRenderedRowsCount-1){
        this.state.sliderOffset = 0
    } else {
        this.state.sliderOffset = (Math.ceil(offset/width)*width)
    }

    if (this.props.showPreview === true && Platform.OS === 'ios') {
      // [0] Show preview only if zoom is disabled
      const newShowPreview = event.zoomScale <= 1;
      if (this.state.showPreview !== newShowPreview) {
        this.setState({ showPreview: newShowPreview });
      }
      if (!newShowPreview) {
        return;
      }
    }

    // [1] If preview is displayed, adjust position to current image index
    if (this._refPreviewListView != null) {
      const layoutWidth = event.layoutMeasurement.width;
      const currentIndex = Math.floor((event.contentOffset.x + (0.5 * layoutWidth)) / layoutWidth);
      const newPreviewOffset = ((currentIndex - 2) * this.props.previewImageSize) + this._bias;
      if (this._previewOffset !== newPreviewOffset) {
        this._refPreviewListView.scrollTo({ x: newPreviewOffset });
        this._previewOffset = newPreviewOffset;
      }
    }
  }

  handlePreviewLayout(e) {
    this._bias = (e.nativeEvent.layout.width % this.props.previewImageSize) / 2;
  }

  renderImageView(row) {
    const {
      width,
      height,
      imageStyle,
      previewImageSize,
      getImageSourceFromDataSource,
    } = this.props;
    /*let imageHeight = height;
    if (this.state.showPreview) {
      imageHeight -= previewImageSize;
    }*/
    imageHeight = width/(4/3)

    return (
      <TouchableWithoutFeedback onPress={() => this.props.onPress(row.id)}>
      <Image
        style={[
          imageStyle,
          { width, height: imageHeight},
        ]}
        source={getImageSourceFromDataSource(row)}
        resizeMode="cover"
      />
        </TouchableWithoutFeedback>
    );
  }

  renderImagePreview(row) {
    const { previewImageStyle, previewImageSize, getImageSourceFromDataSource } = this.props;
    return (
      <Image
        style={[
          styles.previewImage,
          previewImageStyle,
          { width: previewImageSize, height: previewImageSize },
        ]}
        source={getImageSourceFromDataSource(row)}
        resizeMode="contain"
      />
    );
  }

  renderPreviewListView() {
    if (!this.state.showPreview) { return null; }
    return (
      <View
        style={[
          styles.previewListView,
          this.props.previewContainerStyle,
          { height: this.props.previewImageSize },
        ]}>
        <ListView
          initialListSize={10}
          onLayout={this.handlePreviewLayout}
          dataSource={this.props.dataSource}
          renderRow={this.renderImagePreview}
          horizontal={true}
          scrollEnabled={false}
          ref={comp => { this._refPreviewListView = comp; return; }}
        />
      </View>
    );
  }

  renderScrollComponent(props) {
    return React.cloneElement(
      this.props.renderScrollComponent(props),
      {
        horizontal: true,
        pagingEnabled: true,
        maximumZoomScale: 3.0,
        directionalLockEnabled: true,
        showsVerticalScrollIndicator: false,
        showsHorizontalScrollIndicator: false,
        ...props,
      });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <ListView
          renderScrollComponent={this.renderScrollComponent}
          onScroll={this.handleScroll}
          dataSource={this.props.dataSource}
          style={styles.listView}
          renderRow={this.renderImageView}
          ref={comp => { this._refListView = comp; return; }}
        />
        {this.renderPreviewListView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
  listView: {
    flex: 1,
  },
  previewListView: {
    marginTop: 2,
    paddingTop: 2,
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  previewImage: {
    marginLeft: 2,
    marginRight: 2,
  },
});
