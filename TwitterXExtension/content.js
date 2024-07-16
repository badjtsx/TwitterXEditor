chrome.storage.sync.get([
    'switcherBool', 'HomeBool', 'ExploreBool', 'NotificationsBool',
    'MessagesBool', 'GrokBool', 'ListsBool', 'BookmarksBool',
    'CommunitiesBool', 'PremiumBool', 'VerifiedBool', 'ProfileBool',
    'MoreBool', 'PostBool', 'WhatsHappeningBool', 'WhoToFollowBool', 'MessagesPopBool', 'PremiumAdBool', 'TermsBool', 'AllRightBool'
], function (result) {
    let switcherBool = result.switcherBool || false,
        HomeBool = result.HomeBool || false,
        ExploreBool = result.ExploreBool || false,
        NotificationsBool = result.NotificationsBool || false,
        MessagesBool = result.MessagesBool || false,
        GrokBool = result.GrokBool || false,
        ListsBool = result.ListsBool || false,
        BookmarksBool = result.BookmarksBool || false,
        CommunitiesBool = result.CommunitiesBool || false,
        PremiumBool = result.PremiumBool || false,
        VerifiedBool = result.VerifiedBool || false,
        ProfileBool = result.ProfileBool || false,
        MoreBool = result.MoreBool || false,
        PostBool = result.PostBool || false,
        WhatsHappeningBool = result.WhatsHappeningBool || false,
        WhoToFollowBool = result.WhoToFollowBool || false,
        MessagesPopBool = result.MessagesPopBool || false,
        PremiumAdBool = result.PremiumAdBool || false,
        TermsBool = result.TermsBool || false;
        AllRightBool = result.AllRightBool || false;

    // Initialize CSS rule strings
    let Switcher = '';
    let Home = '';
    let Explore = '';
    let Notifications = '';
    let Messages = '';
    let Grok = '';
    let Lists = '';
    let Bookmarks = '';
    let Communities = '';
    let Premium = '';
    let Verified = '';
    let Profile = '';
    let More = '';
    let Post = '';
    let WhatsHappening = '';
    let WhoToFollow = '';
    let MessagesPop = '';
    let PremiumAd = '';
    let Terms = '';
    let AllRight = '';
    
    // Conditional assignment based on boolean values
    if (switcherBool) {
        Switcher = `
.r-184id4b {
    display: none !important;
}
`;
    }
    if (HomeBool) {
        Home = `
.r-cnw61z[href="/home"],
.r-1mkv55d[href="/home"] {
    display: none !important;    
}
`;
    }
    if (ExploreBool) {
        Explore = `
[href="/explore"] {
    display: none !important;    
}
`;
    }
    if (NotificationsBool) {
        Notifications = `
[href="/notifications"] {
    display: none !important;    
}
`;
    }
    if (MessagesBool) {
        Messages = `
[href="/messages"] {
    display: none !important;    
}
`;
    }
    if (GrokBool) {
        Grok = `
[href="/i/grok"] {
    display: none !important;    
}
`;
    }
    if (ListsBool) {
        Lists = `
[aria-label="Lists"] {
    display: none !important;    
}
`;
    }
    if (BookmarksBool) {
        Bookmarks = `
[href="/i/bookmarks"] {
    display: none !important;    
}
`;
    }
    if (CommunitiesBool) {
        Communities = `
[aria-label="Communities"] {
    display: none !important;    
}
`;
    }
    if (PremiumBool) {
        Premium = `
[href="/i/premium_sign_up"] {
    display: none !important;    
}
`;
    }
    if (VerifiedBool) {
        Verified = `
[href="/i/verified-orgs-signup"] {
    display: none !important;    
}
`;
    }
    if (ProfileBool) {
        Profile = `
[data-testid="AppTabBar_Profile_Link"] {
    display: none !important;    
}
`;
    }
    if (MoreBool) {
        More = `
[data-testid="AppTabBar_More_Menu"] {
    display: none !important;    
}
`;
    }
    if (PostBool) {
        Post = `
.css-175oi2r[href="/compose/post"] {
    display: none !important;    
}
`;

    }
    if (WhatsHappeningBool) {
        WhatsHappening = `
    [aria-label="Timeline: Trending now"] {
    display: none !important;    
}
`;

    }if (WhoToFollowBool) {
        WhoToFollow = `
    .css-175oi2r.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x > div {
    display: none !important;
}

`;

    } if (MessagesPopBool) {
        MessagesPop = `
    [data-testid="DMDrawer"] {
    display: none !important;
}

`;

    }
    if (PremiumAdBool) {
        PremiumAd = `
    .css-175oi2r > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x > aside[aria-label="Stay organized with Bookmark Folders"] {
    display: none !important;
}
`;

    }
    if (TermsBool) {
        Terms = `
    .css-175oi2r.r-1kqtdi0.r-1867qdf.r-1phboty.r-1ifxtd0.r-1udh08x.r-1niwhzg.r-1yadl64 {
    display: none !important;
    
}
`;

    }
    if (AllRightBool) {
        AllRight = `
    .css-175oi2r.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x {
    display: none !important;
}
`;

    }

    // Combine all CSS rules into a single string
    const AllStyles = `
${Switcher}
${Home}
${Explore}
${Notifications}
${Messages}
${Grok}
${Lists}
${Bookmarks}
${Communities}
${Premium}
${Verified}
${Profile}
${More}
${Post}
${WhatsHappening}
${WhoToFollow}
${MessagesPop}
${PremiumAd}
${Terms}
${AllRight}
`;
    // Create a <style> element and append to <head> to apply styles
    const styleElement = document.createElement('style');
    styleElement.textContent = AllStyles;
    document.head.appendChild(styleElement);
});