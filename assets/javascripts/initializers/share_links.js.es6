import Sharing from 'discourse/lib/sharing';

export default {
  name: 'sharing-links',

  initialize: function() {
    // Backwards compatibility
    Discourse.ShareLink = {};
    Discourse.ShareLink.addTarget = function(id, source) {
      Ember.warn('Discourse.ShareLink.addTarget is deprecated. Import `Sharing` and call `addSource` instead.');
      source.id = id;
      Sharing.addSource(source);
    };

    Sharing.addSource({
      id: 'weibo',
      faIcon: 'fa-weibo',
      generateUrl: function(link, title) {
        return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 370
    });

    Sharing.addSource({
      id: 'renren',
      faIcon: 'fa-renren',
      generateUrl: function(link, title) {
        return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 628
    });

    Sharing.addSource({
      id: 'wechat',
      faIcon: 'fa-wechat',
      generateUrl: function(link) {
        return ("http://s.jiathis.com/qrcode.php?url=" + encodeURIComponent(link));
      },
      shouldOpenInPopup: true,
      popupHeight: 200
    });

  }
};
