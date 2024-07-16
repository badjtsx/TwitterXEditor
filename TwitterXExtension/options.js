document.addEventListener('DOMContentLoaded', function() {
    // Load saved settings
    chrome.storage.sync.get([
        'switcherBool', 'HomeBool', 'ExploreBool', 'NotificationsBool', 
        'MessagesBool', 'GrokBool', 'ListsBool', 'BookmarksBool', 
        'CommunitiesBool', 'PremiumBool', 'VerifiedBool', 'ProfileBool', 
        'MoreBool', 'PostBool', 'WhatsHappeningBool', 'WhoToFollowBool', 'MessagesPopBool', 'PremiumAdBool', 'TermsBool', 'AllRightBool'
    ], function(result) {
        // Example: Set the checked state of a checkbox based on saved 'switcherBool'
        document.getElementById('Switcher').checked = result.switcherBool || false;
        document.getElementById('Home').checked = result.HomeBool || false;
        document.getElementById('Explore').checked = result.ExploreBool || false;
        document.getElementById('Notifications').checked = result.NotificationsBool || false;
        document.getElementById('Messages').checked = result.MessagesBool || false;
        document.getElementById('Grok').checked = result.GrokBool || false;
        document.getElementById('Lists').checked = result.ListsBool || false;
        document.getElementById('Bookmarks').checked = result.BookmarksBool || false;
        document.getElementById('Communities').checked = result.CommunitiesBool || false;
        document.getElementById('Premium').checked = result.PremiumBool || false;
        document.getElementById('Verified').checked = result.VerifiedBool || false;
        document.getElementById('Profile').checked = result.ProfileBool || false;
        document.getElementById('More').checked = result.MoreBool || false;
        document.getElementById('Post').checked = result.PostBool || false;
        document.getElementById('WhatsHappening').checked = result.WhatsHappeningBool || false;
        document.getElementById('WhoToFollow').checked = result.WhoToFollowBool || false;
        document.getElementById('MessagesPop').checked = result.MessagesPopBool || false;
        document.getElementById('PremiumAd').checked = result.PremiumAdBool || false;
        document.getElementById('Terms').checked = result.TermsBool || false;
        document.getElementById('AllRight').checked = result.AllRightBool || false;
    });
  
    // Save button click handler
    document.getElementById('saveButton').addEventListener('click', function() {
        let switcherBool = document.getElementById('Switcher').checked;
        let HomeBool = document.getElementById('Home').checked;
        let ExploreBool = document.getElementById('Explore').checked;
        let NotificationsBool = document.getElementById('Notifications').checked;
        let MessagesBool = document.getElementById('Messages').checked;
        let GrokBool = document.getElementById('Grok').checked;
        let ListsBool = document.getElementById('Lists').checked;
        let BookmarksBool = document.getElementById('Bookmarks').checked;
        let CommunitiesBool = document.getElementById('Communities').checked;
        let PremiumBool = document.getElementById('Premium').checked;
        let VerifiedBool = document.getElementById('Verified').checked;
        let ProfileBool = document.getElementById('Profile').checked;
        let MoreBool = document.getElementById('More').checked;
        let PostBool = document.getElementById('Post').checked;
        let WhatsHappeningBool = document.getElementById('WhatsHappening').checked;
        let WhoToFollowBool = document.getElementById('WhoToFollow').checked;
        let MessagesPopBool = document.getElementById('MessagesPop').checked;
        let PremiumAdBool = document.getElementById('PremiumAd').checked;
        let TermsBool = document.getElementById('Terms').checked;
        let AllRightBool = document.getElementById('AllRight').checked;
      
        chrome.storage.sync.set({ 'switcherBool': switcherBool, 'HomeBool': HomeBool, 'ExploreBool': ExploreBool, 'NotificationsBool': NotificationsBool, 'MessagesBool': MessagesBool, 'GrokBool': GrokBool, 'ListsBool': ListsBool, 'BookmarksBool': BookmarksBool, 'CommunitiesBool': CommunitiesBool, 'PremiumBool': PremiumBool, 'VerifiedBool': VerifiedBool, 'ProfileBool': ProfileBool, 'MoreBool': MoreBool, 'PostBool': PostBool, 'WhatsHappeningBool': WhatsHappeningBool, 'WhoToFollowBool': WhoToFollowBool, 'MessagesPopBool': MessagesPopBool, 'PremiumAdBool': PremiumAdBool, 'TermsBool': TermsBool, 'AllRightBool': AllRightBool }, function() {
            console.log('Saved');
        });
    });
});

