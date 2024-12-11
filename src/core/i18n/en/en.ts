export const en = {
  translation: {
    theme: {
      toggleTitle: 'Color scheme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },

    navbar: {
      title: 'Movesong',
      actions: 'Actions',
      plans: 'Plans',
      help: 'Help',
      login: 'Login',
      transferSongsTitle: 'Transfer songs',
      transferSongsDescription: 'Transfer your playlists between music streaming services.',
      premiumTitle: 'Premium',
      premiumDescription: 'Subscribe to premium to unlock all features and support the project.',
      freeTitle: 'Free package',
      freeDescription: 'Use the free package to transform-tabs up to 500 songs.'
    },

    footer: {
      header: 'We are always happy to help!',
      subtitle: 'Feel free to ask any questions.',
      faqButton: 'FAQ',
      contactUsButton: 'Contact us',
      homeText: 'Home',
      registrationText: 'Register',
      settingsText: 'Settings',
      syncedPlaylistsText: 'Synced playlists',
      helpText: 'Help',
      contactText: 'Contact',
      faqText: 'FAQ',
      legalDocumentsText: 'Legal documents',
      termsOfUseText: 'Terms of use',
      privacyPolicyText: 'Privacy policy',
      packagesText: 'Packages',
      transformText: 'Transform',
    },


    landing: {
      landingTitle: {
        header: 'Streaming music without limits.',
        subtitle: 'Move your songs, sync your playlists and share them with others, regardless of streaming services.',
        button: 'Start for free',
      },

      landingIntroduction: {
        header: 'What is Movesong?',
        subtitle: 'Movesong is a versatile music platform designed to make playlist management effortless across multiple streaming services. It enables users to seamlessly transfer their playlists from one music service to another, ensuring they never lose their favorite tracks. With intuitive tools, Movesong simplifies creating, editing, and sharing playlists, making music discovery and sharing more social and accessible. Users can explore a wide range of musical content, find new tunes, and ensure their music library is always in sync, regardless of the platform they prefer.',
      },

      landingPopularFeatures: {
        header: 'The coolest features.',
        transferHeader: 'Transform',
        transferSubtitle: 'Movesong lets you easily transform your playlists across different music platforms.',
        syncHeader: 'Synchronize',
        syncSubtitle: 'Synchronize your music effortlessly so you can enjoy the same playlists on all your devices.',
        shareHeader: 'Share',
        shareSubtitle: 'Share your favorite songs and playlists with friends in just one click.',
      },

      landingPopularPlatforms: {
        header: 'From anywhere, to anywhere.',
        transfer: 'Switch',
        from: 'from',
        to: 'to',
        spotify: 'Spotify',
        youtubeMusic: 'YouTube Music',
        soundcloud: 'Soundcloud',
      },
    },

    alreadyLoggedIn: {
      text: 'You are already logged in.',
      buttonText: 'Take me back',
    },

    errorPage: {
      header: '404',
      text: 'The page you are looking for does not exist.',
      buttonText: 'Take me back',
    },

    auth: {
      forgotPassword: {
        changePanel: {
          header: 'Change your password',
          successToast: {
            title: 'Yay!',
            description: 'Password has been changed successfully. You can now log in with your new password.',
          },
          errorToast: {
            title: 'Password reset failed.',
            description: 'Please try again with a valid new password.',
          },
          passwordInputPlaceholder: 'New password',
          confirmPasswordInputPlaceholder: 'Confirm password',
          buttonText: 'Change password',
        },

        emailPanel: {
          header: 'Reset Your password',
          errorToast: {
            title: 'Password reset failed.',
            description: 'Please try again with a valid email address.',
          },
          emailInputPlaceholder: 'Email address',
          buttonText: 'Send email',
        },

        otpPanel: {
          header: 'Email Verification',
          text: 'Keep this window open and type in the security code we just sent to',
          errorToast: {
            title: 'Password reset failed.',
            description: 'Please try again with a valid token.',
          },
          resendEmailSuccessToast: {
            title: 'Yay!',
            description: 'Confirmation email has been resent.',
          },
          resendEmailErrorToast: {
            title: 'Uh oh! Something went wrong.',
            description: 'Could not resend email. Please try again.',
          },
          buttonText: 'Verify',
          resendEmailText: 'Didn\'t get the code?',
          resendEmailButtonText: 'Resend email',
        },
      },
      login: {
        emailPanel: {
          header: 'Log in to Movesong',
          userNameOrEmailInputPlaceholder: 'Username or email',
          buttonText: 'Log in',
          registerText: 'Don\'t have an account?',
          registerButtonText: 'Register now',
        },
        passwordPanel: {
          header: 'Log in to Movesong',
          passwordPlaceholder: 'Password',
          buttonText: 'Log in',
          logInWithDifferentAccountButtonText: 'Log in with different account',
          forgotYourPasswordText: 'Forgot your password?',
          forgotYourPasswordButtonText: 'Click here',
          successToast: {
            title: 'Logged in successfully!',
            description: 'Welcome back!',
          },
          errorToast: {
            title: 'Login failed!',
            description: 'Invalid username or password.',
          },
        },
      },
      register: {
        confirmEmailPanel: {
          header: 'Email Verification',
          text: 'Keep this window open and type in the security code we just sent to',
          buttonText: 'Confirm email',
          resendEmailText: 'Didn\'t get the code?',
          resendEmailButtonText: 'Resend email',
          successToast: {
            title: 'Yay!',
            description: 'Email has been confirmed successfully. You can now log in.',
          },
          resendEmailSuccessToast: {
            title: 'Yay!',
            description: 'Confirmation email has been resent.',
          },
        },
        emailPanel: {
          header: 'Create Your Account',
          emailInputPlaceholder: 'Email Address',
          button: 'Register with email',
          alreadyHaveAnAccountText: 'Already have an account?',
          alreadyHaveAnAccountButtonText: 'Log in',
        },
        passwordPanel: {
          header: 'Create Your Account',
          usernameInputPlaceholder: 'Username',
          firstNameInputPlaceholder: 'First name',
          lastNameInputPlaceholder: 'Last name',
          passwordInputPlaceholder: 'Password',
          confirmPasswordInputPlaceholder: 'Confirm password',
          buttonText: 'Register',
          registerWithDifferentEmailButtonText: 'Register with different email',
          alreadyHaveAnAccountText: 'Already have an account?',
          alreadyHaveAnAccountButtonText: 'Log in',
          successToast: {
            title: 'Registered successfully!',
            description: 'Please check your email to verify your account.',
          },
          errorToast: {
            title: 'Registration failed!',
            description: 'Username or email already exists.',
          },
        },
      },
    },

    connection: {
      newConnectionPanel: {
        header: 'CONNECT AN ACCOUNT',
      },
      spotifyConnectedPanel: {
        successToast: {
          title: 'Yay!',
          description: 'Spotify connected successfully!',
        },
        errorToast: {
          title: 'Oops!',
          description: 'Something went wrong. Please try again.',
        },
        buttonText: 'Take me to my profile',
      },
      youtubeConnectedPanel: {
        successToast: {
          title: 'Yay!',
          description: 'YouTube connected successfully!',
        },
        errorToast: {
          title: 'Oops!',
          description: 'Something went wrong. Please try again.',
        },
        buttonText: 'Take me to my profile',
      },
    },

    contact: {
      header: 'Contact us',
      text: 'We are always happy to help! Feel free to ask any questions.',
      subjectPlaceholder: 'Subject',
      subjectItems: {
        suggestion: 'Suggestion',
        feedback: 'Feedback',
        problem: 'Problem',
      },
      nameLabelText: 'Your Name',
      emailLabelText: 'Your Email',
      messageLabelText: 'Message',
      successToast: {
        title: 'Yay!',
        description: 'Your message has been sent successfully.',
      },
      errorToast: {
        title: 'Oops!',
        description: 'An error occurred while sending your message. Please try again.',
      },
      buttonText: 'Send message',
    },

    faq: {
      header: 'Frequently Asked Questions',
      text: 'Here are some of the most frequently asked questions. If you have any other questions, please feel free to contact us.',
      item1: {
        question: 'How do I convert a YouTube playlist to Spotify?',
        answer: 'To convert a YouTube playlist to Spotify, simply connect both your YouTube and Spotify accounts, select the playlist you\'d like to convert, and the app will handle the rest. You can even preview the conversion before finalizing it.',
      },
      item2: {
        question: 'Can I convert a Spotify playlist to YouTube?',
        answer: 'Yes, you can convert a Spotify playlist to YouTube as well. Just follow the same steps: connect your Spotify and YouTube accounts, choose the playlist, and the app will convert the songs automatically.',
      },
      item3: {
        question: 'Do I need an account to use the app?',
        answer: 'Yes, you need to create an account to save your playlist conversions and access other features like synchronization and sharing. Once signed up, you can manage your playlist history and keep track of your activities.',
      },
      item4: {
        question: 'What are the benefits of subscribing to premium?',
        answer: 'As a premium member, you get unlimited playlist conversions, automatic synchronization between YouTube and Spotify, and additional export options like TXT or CSV. Premium also removes any limits on the number of playlists you can convert.',
      },
      item5: {
        question: 'How much does premium cost?',
        answer: 'Premium costs $4.99 per month or $24.99 per year. You can cancel anytime, and subscribing gives you full access to all premium features without any limitations.',
      },
      item6: {
        question: 'Can I cancel my premium subscription?',
        answer: 'Yes, you can cancel your premium subscription anytime from your account settings. Once canceled, your account will revert to the free version, and you’ll still retain access to your previously converted playlists.',
      },
      item7: {
        question: 'Is there a limit to how many songs I can convert?',
        answer: 'Free users can convert up to 500 songs, but premium members enjoy unlimited song conversions without any restrictions.',
      },
      item8: {
        question: 'What happens to my playlists if I unsubscribe from premium?',
        answer: 'If you unsubscribe from premium, your existing playlists and conversions remain accessible, but you will lose access to premium features such as automatic synchronization and unlimited song transfers.',
      },
    },

    premium: {
      cancelPanel: {
        text: 'Your premium subscription was not successful. Please try again later.',
        buttonText: 'Take me back',
      },
      successPanel: {
        text: 'Your premium subscription was successful. Thank you for your support!',
        buttonText: 'Take me back',
        toast: {
          title: 'Yay!',
          description: 'Your premium subscription was successful. Thank you for your support!',
        }
      },
      freePackage: {
        header: 'Free package summary',
        benefit1: 'Max 500 song transfers per playlist',
        benefit2: 'No automatic synchronization',
        benefit3: 'No export to TXT / CSV',
      },
      premiumPackage: {
        header: 'Switch to premium!',
        benefit1: 'Unlimited song transfers',
        benefit2: 'Automatic synchronization',
        benefit3: 'Export to TXT / CSV',
      },
      alreadyPremium: {
        text: 'You are already a premium member, with the following benefits:',
      },
      successToast: {
        title: 'Yay!',
        description: 'Your premium subscription was successful. Thank you for your support!',
      },
      errorToast: {
        title: 'Oops!',
        description: 'Something went wrong. Please try again later.',
      },
      header: 'Premium',
      text: 'Get the best experience with Movesong Premium.',
      buttonText: 'Get Premium',
      monthlyButtonText: '$ 4.99 / month',
      yearlyButtonText: '$ 24.99 / year',
    },

    profile: {
      accountHeader: 'Account',
      syncHeader: 'Synchronization',
      sharesHeader: 'Shares',
      historyHeader: 'History',
      accountTab: {
        loggedOutToast: {
          title: 'Yay!',
          description: 'You have been logged out successfully.',
        },
        notPremium: 'You are not a premium member.',
        logOutButtonText: 'Log out',
        deleteAccountButtonText: 'Delete account',
        cancelSubscriptionButtonText: 'Cancel subscription',
        logOutPopover: {
          header: 'Log out',
          text: 'Are you sure you want to log out?',
          buttonText: 'Log out',
        },
        deleteAccountPopover: {
          header: 'Are you sure you want to delete your account?',
          text: 'This action cannot be undone.',
          buttonText: 'Delete account',
        },
        cancelSubscriptionPopover: {
          header: 'Are you sure you want to cancel your subscription?',
          text: 'This action cannot be undone.',
          buttonText: 'Cancel subscription',
        },
        account: 'Account',
        premium: 'Premium account',
        premiumBundle: 'Premium bundle:',
        nextPayment: 'Next payment:',
        paymentMethod: 'Payment method:',
        card: 'Card',
        connections: 'Connections',
        logout: 'Logout',
        logoutSuccessToast: {
          title: 'Yay!',
          description: 'You have been logged out successfully.',
        },
        deleteAccountSuccessToast: {
          title: 'Yay!',
          description: 'Your account has been deleted successfully.',
        },
        cancelSubscriptionSuccessToast: {
          title: 'Yay!',
          description: 'Your subscription has been canceled successfully.',
        },
        noConnections: 'You have no connections yet.',
        newConnection: 'New connection',
        email: 'Email:',
        changePassword: 'Change password',
        changePasswordDialog: {
          header: 'Change password',
          text: 'Enter your current password and your new password. Click save when you are done.',
          oldPassword: 'Current password',
          newPassword: 'New password',
          confirmNewPassword: 'Confirm new password',
          saveButtonText: 'Save',
          closeButtonText: 'Close',
          successToast: {
            title: 'Yay!',
            description: 'Password changed successfully.',
          },
        },
      },
      historyTab: {
        header: 'History',
        itemsTransformed: 'items transferred',
        newTransformButtonText: 'New transfer',
        noTransforms: 'You have no transfers yet.',
        shareSuccessToast: {
          title: 'Yay!',
          description: 'Playlist has been shared successfully.',
        },
      },
      sharesTab: {
        header: 'Shares',
        newShareButtonText: 'New share',
        sharesTable: {
          filterPlaylists: "Filter playlists...",
          actions: "Actions",
          copyLink: "Copy playlist link",
          share: "Share",
          openOnPlatform: "Open on platform",
          openMenu: "Open menu",
          noResults: "No results.",
          public: "Public",
          private: "Private",
          sharedPlaylistName: "Playlist name",
          date: "Date",
          views: "Views",
          selectAll: "Select all",
          selectRow: "Select row",
          visible: "Status",
          selected: "row selected.",
          next: "Next",
          previous: "Previous",
          columns: "Columns",
          open: "Open",
          changeStatus: "Change status",
          changeStatusToast: {
            title: 'Yay!',
            description: 'Status changed successfully.',
          },
          linkCopiedToast: {
            title: 'Link copied to clipboard!',
            description: 'You can now share the link with your friends',
          },
        },
      },
      syncsTab: {
        header: 'Synchronizations',
        newSyncButtonText: 'New synchronization',
        syncsTable: {
          filterPlaylists: "Filter playlists...",
          actions: "Actions",
          copyLink: "Copy playlist link",
          share: "Share",
          openOnPlatform: "Open on platform",
          openMenu: "Open menu",
          noResults: "No results.",
          lastSyncDate: "Last sync date",
          interval: "Interval",
          enabled: "Enabled",
          disabled: "Disabled",
          playlistName: "Playlist name",
          date: "Date",
          views: "Views",
          selectAll: "Select all",
          selectRow: "Select row",
          visible: "Status",
          selected: "row selected.",
          next: "Next",
          previous: "Previous",
          columns: "Columns",
          open: "Open",
          changeStatus: "Change status",
          changeStatusToast: {
            title: 'Yay!',
            description: 'Status changed successfully.',
          },
          deleteToast: {
            title: 'Yay!',
            description: 'Synchronization deleted successfully.',
          },
          changeIntervalToast: {
            title: 'Yay!',
            description: 'Interval changed successfully.',
          },
          changeInterval: 'Change interval',
          delete: 'Delete',
          changeIntervalDialog: {
            header: 'Change interval',
            text: 'Select the interval for synchronization. Click save when you are done.',
            interval: 'Interval',
            buttonText: 'Save',
          },
        },
      },
      welcome: 'Welcome,',
    },

    share: {
      shareUpdatedToast: {
        title: 'Yay!',
        description: 'Share has been updated successfully.',
      },
      linkCopiedToast: {
        title: 'Link copied to clipboard!',
        description: 'You can now share the link with your friends',
      },
      editShareDialog: {
        header: 'Edit share',
        text: 'Make changes to your shared playlist here. Click save when you are done.',
        playlistNameLabel: 'Playlist name',
        backgroundLabel: 'Background',
        buttonText: 'Save changes',
      },
      sharedWithYou: 'shared a playlist with you.',
      openOn: 'Open playlist on:',
      importIntoMyLibraryButtonText: 'Import into my library',
    },

    transform: {
      step: 'step',
      sourceTab: {
        header: 'SELECT SOURCE',
        noConnections: 'You have no connections yet. Please connect your Spotify or YouTube account first in your profile.',
      },
      playlistTab: {
        header: 'SELECT PLAYLIST',
      },
      destinationTab: {
        header: 'SELECT DESTINATION',
      },
      summaryTab: {
        header: 'SUMMARY',
        text: 'Transferring playlist ',
        songs: 'songs',
        convertButtonText: 'Convert',
      },
      finish: {
        header: 'TRANSFER COMPLETE',
        shareMySongsButtonText: 'Share my songs',
        downloadButtonText: 'Download',
        convertAgainButtonText: 'Convert again',
        copied: 'copied',
      },
    },

    sync: {
      source: 'SOURCE',
      destination: 'DESTINATION',
      interval: 'INTERVAL',
      hourly: 'Hourly',
      daily: 'Daily',
      weekly: 'Weekly',
      syncSuccessfulToast: {
        title: 'Yay!',
        description: 'Synchronization completed successfully.',
      },
      intervalPlaceholder: 'Select interval',
      syncButtonText: 'Synchronize',
    },

    termsOfService: {
      header: 'Terms of Service',
      firstHeader: '1. Terms',
      firstText: 'By accessing the website at https://www.movesong.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.',
      secondHeader: '2. Use License',
      secondText: 'a. Permission is granted to temporarily download one copy of the materials (information or software) on Movesong\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<br/>' +
        '- modify or copy the materials;<br/>' +
        '- use the materials for any commercial purpose, or for any public display (commercial or non-commercial);<br/>' +
        '- attempt to decompile or reverse engineer any software contained on Movesong\'s website;<br/>' +
        '- remove any copyright or other proprietary notations from the materials; or<br/>' +
        '- transfer the materials to another person or "mirror" the materials on any other server.<br/>' +
        '- This service cannot be used to develop a third party site.<br/>' +
        '- All the content on https://www.movesong.com is copyrighted and belongs to https://www.movesong.com<br/>' +
        'b. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Movesong at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
      thirdHeader: '3. Disclaimer',
      thirdText: 'a. The materials on Movesong\'s website are provided on an \'as is\' basis. Movesong makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.<br/>' +
        '<br/>' +
        'b. Further, Movesong does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
      fourthHeader: '4. Limitations',
      fourthText: 'In no event shall Movesong or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Movesong\'s website, even if Movesong or a Movesong authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
      fifthHeader: '5. Accuracy of materials',
      fifthText: 'The materials appearing on Movesong\'s website could include technical, typographical, or photographic errors. Movesong does not warrant that any of the materials on its website are accurate, complete or current. Movesong may make changes to the materials contained on its website at any time without notice. However Movesong does not make any commitment to update the materials.',
      sixthHeader: '6. Links',
      sixthText: 'Movesong has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Movesong of the site. Use of any such linked website is at the user\'s own risk.<br/>' +
        '<br/>' +
        'Our website participates in the Amazon Affiliate Program and the Apple Music Affiliate Program. As a participant in these affiliate programs, we earn from qualifying purchases made through links on our website.',
      seventhHeader: '7. Modifications',
      seventhText: 'Movesong may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.',
      eighthHeader: '8. Third party platform',
      eighthText: 'This service is in no way associated with YouTube, YouTube Music, Spotify, Google Play Music, Apple Music, Amazon Music, Deezer, last.fm, KKBOX, Pandora, Tidal, SoundCloud',
      ninthHeader: '9. Third Party Terms of Service',
      ninthText: 'YouTube - By using Movesong, You are agreeing to be bound by the YouTube Terms Of Service. Movesong uses the YouTube API Services. Please also checkout Google Privacy Policy. Movesong uses YouTube user information to access, provide and display YouTube datas on Movesong. Movesong will be able to retrieve user YouTube username, user private playlists, liked videos, uploaded videos and subscribed channels. User datas are only used to provide Movesong services and are not shared with any external service. You can always revoke Movesong access to your data via the Google security settings page and can also contact Movesong with any questions or complaints here.<br/>' +
        '<br/>' +
        'Spotify - By using Movesong, You are agreeing to be bound by the Spotify Terms and Conditions of Use. Movesong uses the Spotify API Services. Movesong uses Spotify user information to access, provide and display Spotify datas on Movesong. Movesong will be able to retrieve user Spotify username, user private playlists, liked tracks, liked albums and liked artists. User datas are only used to provide Movesong services and are not shared with any external service. You can always revoke Movesong access to your data via the Spotify Apps with access to your Spotify information page and can also contact Movesong with any questions or complaints here.',
    },

    privacyPolicy: {
      header: 'Privacy policy',
      text: 'Your privacy is important to us. It is Movesong\'s policy to respect your privacy regarding any information we may collect from you across our website, https://www.movesong.com.<br/>' +
        '<br/>' +
        'We don`t collect any personal information. We only ask for information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.<br/>' +
        '<br/>' +
        'To improve your experience on our site, we may use \'cookies\'. Cookies are an industry standard and most major web sites use them. A cookie is a small text file that our site may place on your computer as a tool to remember your preferences. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website.<br/>' +
        '<br/>' +
        'Movesong’s use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.<br/>' +
        '<br/>' +
        'Movesong uses the YouTube API Services. Please also checkout Google Privacy Policy. Movesong uses YouTube user information to access, provide and display YouTube datas on Movesong. Movesong will be able to retrieve user YouTube username, user private playlists, liked videos, uploaded videos and subscribed channels. User datas are only used to provide Movesong services and are not shared with any external service. You can always revoke Movesong access to your data via the Google security settings page and can also contact Movesong with any questions or complaints here.<br/>' +
        '<br/>' +
        'Movesong uses the Spotify API Services. Please also checkout Spotify Privacy Policy. Movesong uses Spotify user information to access, provide and display Spotify datas on Movesong. Movesong will be able to retrieve user Spotify username, user private playlists, liked tracks, liked albums and liked artists. User datas are only used to provide Movesong services and are not shared with any external service. You can always revoke Movesong access to your data via the Spotify Apps with access to your Spotify information page and can also contact Movesong with any questions or complaints here.<br/>' +
        '<br/>' +
        'We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.<br/>' +
        '<br/>' +
        'We don’t share any personally identifying information publicly or with third-parties, except when required to by law.<br/>' +
        '<br/>' +
        'Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.<br/>' +
        '<br/>' +
        'You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.<br/>' +
        '<br/>' +
        'Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.',
    },
  },
};
