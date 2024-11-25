export const hu = {
  translation: {
    theme: {
      toggleTitle: 'Téma',
      light: 'Világos',
      dark: 'Sötét',
      system: 'Rendszer',
    },

    navbar: {
      title: 'Movesong',
      actions: 'Műveletek',
      plans: 'Csomagok',
      help: 'Segítség',
      login: 'Bejelentkezés',
    },

    footer: {
      header: 'Mi mindig szívesen segítünk!',
      subtitle: 'Kérdezz bátran bármit.',
      faqButton: 'GYIK',
      contactUsButton: 'Kapcsolat',
      homeText: 'Főoldal',
      registrationText: 'Regisztráció',
      settingsText: 'Beállításaim',
      syncedPlaylistsText: 'Szinkronizált lejátszási listáim',
      helpText: 'Súgó',
      contactText: 'Kapcsolat',
      faqText: 'GYIK',
      legalDocumentsText: 'Jogi dokumentumok',
      termsOfUseText: 'Felhasználási feltételek',
      privacyPolicyText: 'Adatvédelmi irányelvek',
      packagesText: 'Csomagok',
      transformText: 'Átvitel',
    },

    landing: {
      landingTitle: {
        header: 'Zenehallgatás korlátok nélkül.',
        subtitle: 'Mozgasd a zenéid, szinkronizáld a lejátszási listáidat és oszd meg másokkal őket, streaming szolgáltatóktól függetlenül.',
        button: 'Kezd el most',
      },

      landingIntroduction: {
        header: 'Mi az a Movesong?',
        subtitle: '\n' +
          'A Movesong egy sokoldalú zenei platform, amely megkönnyíti a lejátszási listák kezelését több streaming szolgáltatás között. Lehetővé teszi a felhasználók számára, hogy zökkenőmentesen áthelyezzék lejátszási listáikat egyik zenei szolgáltatásból a másikba, így sosem veszítenek el egyetlen kedvenc számot sem. Az intuitív eszközök segítségével a Movesong egyszerűsíti a lejátszási listák létrehozását, szerkesztését és megosztását, ezáltal a zenei felfedezés és a megosztás még szociálisabbá és elérhetőbbé válik. A felhasználók felfedezhetik a legkülönfélébb zenei tartalmakat, új dalokat találhatnak, és biztosak lehetnek abban, hogy zenei könyvtáruk mindig szinkronban van, függetlenül attól, melyik platformot részesítik előnyben.',
      },

      landingPopularFeatures: {
        header: 'A legmenőbb funkciók.',
        transferHeader: 'Átvitel',
        transferSubtitle: 'A Movesong lehetővé teszi, hogy lejátszási listáidat könnyedén átalakítsd a különböző zenei platformok között.',
        syncHeader: 'Szinkronizáció',
        syncSubtitle: 'Szinkronizáld zenéidet egyszerűen, hogy minden eszközön ugyanazokat a lejátszási listákat élvezhesd.',
        shareHeader: 'Megosztás',
        shareSubtitle: 'Oszd meg kedvenc zenéidet és lejátszási listáidat barátaiddal egyetlen kattintással.',
      },

      landingPopularPlatforms: {
        header: 'Bárhonnan, bárhová.',
        transfer: 'Válts',
        from: '-ról',
        to: '-ra',
        spotify: 'Spotify',
        youtubeMusic: 'YouTube Music',
        soundcloud: 'Soundcloud',
      },
    },

    alreadyLoggedIn: {
      text: 'Már be vagy jelentkezve.',
      buttonText: 'Vigyél vissza',
    },

    errorPage: {
      header: '404',
      text: 'Az általad keresett oldal nem található.',
      buttonText: 'Vissza a főoldalra',
    },

    auth: {
      forgotPassword: {
        changePanel: {
          header: 'Változtasd meg a jelszavadat',
          successToast: {
            title: 'Hurrá!',
            description: 'A jelszó sikeresen megváltoztatva. Most már be tudsz jelentkezni az új jelszavaddal.',
          },
          errorToast: {
            title: 'A jelszó visszaállítása sikertelen.',
            description: 'Próbáld meg újra egy érvényes új jelszóval.',
          },
          passwordInputPlaceholder: 'Új jelszó',
          confirmPasswordInputPlaceholder: 'Jelszó megerősítése',
          buttonText: 'Jelszó megváltoztatása',
        },

        emailPanel: {
          header: 'Állítsd vissza a jelszavadat',
          errorToast: {
            title: 'A jelszó visszaállítása sikertelen.',
            description: 'Próbáld meg újra egy érvényes e-mail címmel.',
          },
          emailInputPlaceholder: 'E-mail cím',
          buttonText: 'E-mail küldése',
        },

        otpPanel: {
          header: 'E-mail megerősítése',
          text: 'Tartsd nyitva ezt az ablakot, és írd be a biztonsági kódot, amit épp most küldtünk a',
          errorToast: {
            title: 'A jelszó visszaállítása sikertelen.',
            description: 'Próbáld meg újra egy érvényes tokennel.',
          },
          resendEmailSuccessToast: {
            title: 'Hurrá!',
            description: 'A megerősítő e-mail újraküldve.',
          },
          resendEmailErrorToast: {
            title: 'Hoppá! Valami elromlott.',
            description: 'Nem sikerült újraküldeni az e-mailt. Próbáld újra.',
          },
          buttonText: 'Megerősítés',
          resendEmailText: 'Nem kaptál kódot?',
          resendEmailButtonText: 'E-mail újraküldése',
        },
      },
      login: {
        emailPanel: {
          header: 'Jelentkezz be a Movesongra',
          userNameOrEmailInputPlaceholder: 'Felhasználónév vagy e-mail',
          buttonText: 'Bejelentkezés',
          registerText: 'Nincs még fiókod?',
          registerButtonText: 'Regisztrálj most',
        },
        passwordPanel: {
          header: 'Jelentkezz be a Movesongra',
          passwordPlaceholder: 'Jelszó',
          buttonText: 'Bejelentkezés',
          logInWithDifferentAccountButtonText: 'Bejelentkezés másik fiókkal',
          forgotYourPasswordText: 'Elfelejtetted a jelszavadat?',
          forgotYourPasswordButtonText: 'Kattints ide',
          successToast: {
            title: 'Sikeres bejelentkezés!',
            description: 'Üdvözlünk a Movesongon.',
          },
          errorToast: {
            title: 'Sikertelen bejelentkezés',
            description: 'Hibás felhasználónév vagy jelszó.',
          },
        },
      },
      register: {
        confirmEmailPanel: {
          header: 'E-mail megerősítése',
          text: 'Tartsd nyitva ezt az ablakot, és írd be a biztonsági kódot, amit épp most küldtünk a',
          buttonText: 'E-mail megerősítése',
          resendEmailText: 'Nem kaptál kódot?',
          resendEmailButtonText: 'E-mail újraküldése',
          resendEmailSuccessToast: {
            title: 'Hurrá!',
            description: 'A megerősítő e-mail újraküldve.',
          },
        },
        emailPanel: {
          header: 'Hozd létre a fiókodat',
          emailInputPlaceholder: 'E-mail cím',
          button: 'Regisztráció e-maillel',
          alreadyHaveAnAccountText: 'Már van fiókod?',
          alreadyHaveAnAccountButtonText: 'Bejelentkezés',
        },
        passwordPanel: {
          header: 'Hozd létre a fiókodat',
          usernameInputPlaceholder: 'Felhasználónév',
          firstNameInputPlaceholder: 'Keresztnév',
          lastNameInputPlaceholder: 'Vezetéknév',
          passwordInputPlaceholder: 'Jelszó',
          confirmPasswordInputPlaceholder: 'Jelszó megerősítése',
          buttonText: 'Regisztráció',
          registerWithDifferentEmailButtonText: 'Regisztráció másik e-maillel',
          alreadyHaveAnAccountText: 'Már van fiókod?',
          alreadyHaveAnAccountButtonText: 'Bejelentkezés',
          successToast: {
            title: 'Sikeres regisztráció!',
            description: 'Kérlek ellenőrízd a beérkező leveleidet a megerősítő e-mailért.',
          },
          errorToast: {
            title: 'Sikertelen regisztráció',
            description: 'Felhasználónév vagy e-mail foglalt.',
          },
        },
      },
    },

    connection: {
      newConnectionPanel: {
        header: 'FIÓK CSATLAKOZTATÁSA',
      },
      spotifyConnectedPanel: {
        successToast: {
          title: 'Hurrá!',
          description: 'Spotify sikeresen csatlakoztatva!',
        },
        errorToast: {
          title: 'Hoppá!',
          description: 'Valami elromlott. Kérlek, próbáld újra.',
        },
        buttonText: 'Vissza a profilomhoz',
      },
      youtubeConnectedPanel: {
        successToast: {
          title: 'Hurrá!',
          description: 'YouTube sikeresen csatlakoztatva!',
        },
        errorToast: {
          title: 'Hoppá!',
          description: 'Valami elromlott. Kérlek, próbáld újra.',
        },
        buttonText: 'Vissza a profilomhoz',
      },
    },

    contact: {
      header: 'Lépj kapcsolatba velünk',
      text: 'Mindig örömmel segítünk! Ne habozz kérdezni.',
      subjectPlaceholder: 'Tárgy',
      subjectItems: {
        suggestion: 'Javaslat',
        feedback: 'Visszajelzés',
        problem: 'Probléma',
      },
      nameLabelText: 'Neved',
      emailLabelText: 'E-mail címed',
      messageLabelText: 'Üzenet',
      successToast: {
        title: 'Hurrá!',
        description: 'Az üzeneted sikeresen elküldve.',
      },
      errorToast: {
        title: 'Hoppá!',
        description: 'Hiba történt az üzenet küldésekor. Kérlek, próbáld újra.',
      },
      buttonText: 'Üzenet küldése',
    },

    faq: {
      header: 'Gyakran Ismételt Kérdések',
      text: 'Itt találod a leggyakrabban feltett kérdéseket. Ha bármilyen más kérdésed van, nyugodtan lépj kapcsolatba velünk.',
      item1: {
        question: 'Hogyan konvertálhatok egy YouTube lejátszási listát Spotify-ra?',
        answer: 'A YouTube lejátszási lista Spotify-ra történő konvertálásához egyszerűen csatlakoztasd mindkét fiókod, válaszd ki a konvertálni kívánt lejátszási listát, és az alkalmazás elvégzi a többit. Még a konverzió előnézetét is megtekintheted, mielőtt véglegesítened.',
      },
      item2: {
        question: 'Konvertálhatok egy Spotify lejátszási listát YouTube-ra?',
        answer: 'Igen, egy Spotify lejátszási listát is konvertálhatsz YouTube-ra. Csak kövesd ugyanazokat a lépéseket: csatlakoztasd Spotify és YouTube fiókjait, válaszd ki a lejátszási listát, és az alkalmazás automatikusan konvertálja a dalokat.',
      },
      item3: {
        question: 'Szükségem van fiókra az alkalmazás használatához?',
        answer: 'Igen, fiókot kell létrehoznia a lejátszási lista konverzióinak mentéséhez és más funkciók, például a szinkronizálás és a megosztás eléréséhez. A regisztráció után kezelheted a lejátszási lista előzményeit és nyomon követheted tevékenységeit.',
      },
      item4: {
        question: 'Milyen előnyei vannak a prémium előfizetésnek?',
        answer: 'Prémium tagként korlátlan lejátszási lista konverziókat, automatikus szinkronizálást a YouTube és a Spotify között, valamint további exportálási lehetőségeket, például TXT vagy CSV formátumot kapsz. A prémium eltávolít minden korlátozást a konvertálható lejátszási listák számában.',
      },
      item5: {
        question: 'Mennyibe kerül a prémium?',
        answer: 'A prémium havi 4,99 USD vagy évi 24,99 USD. Bármikor lemondhatod, és az előfizetéssel teljes hozzáférést kap az összes prémium funkcióhoz korlátozások nélkül.',
      },
      item6: {
        question: 'Lemondhatom a prémium előfizetésemet?',
        answer: 'Igen, bármikor lemondhatod a prémium előfizetését a fiókbeállításokban. A lemondás után a fiókja visszaáll az ingyenes verzióra, és továbbra is hozzáférhetsz a korábban konvertált lejátszási listákhoz.',
      },
      item7: {
        question: 'Van-e korlátozás a konvertálható dalok számában?',
        answer: 'Az ingyenes felhasználók legfeljebb 500 dalt konvertálhatnak, de a prémium tagok korlátlan dal konverziókat élvezhetnek korlátozások nélkül.',
      },
      item8: {
        question: 'Mi történik a lejátszási listáimmal, ha lemondom a prémiumot?',
        answer: 'Ha lemondod a prémiumot, a meglévő lejátszási listák és konverziók továbbra is elérhetők maradnak, de elveszíted a prémium funkciókhoz való hozzáférést, például az automatikus szinkronizálást és a korlátlan dalátvitelt.',
      },
    },

    premium: {
      cancelPanel: {
        text: 'A prémium előfizetésed nem sikerült. Kérlek, próbáld meg később újra.',
        buttonText: 'Vigyél vissza',
      },
      successPanel: {
        text: 'A prémium előfizetésed sikeres volt. Köszönjük a támogatást!',
        buttonText: 'Vigyél vissza',
        toast: {
          title: 'Hurrá!',
          description: 'A prémium előfizetésed sikeres volt. Köszönjük a támogatást!',
        }
      },
      freePackage: {
        header: 'Ingyenes csomag összefoglaló',
        benefit1: 'Legfeljebb 500 dal átvitel',
        benefit2: 'Nincs automatikus szinkronizálás',
        benefit3: 'Nincs exportálás TXT / CSV formátumba',
      },
      premiumPackage: {
        header: 'Váltás prémiumra!',
        benefit1: 'Korlátlan dal átvitel',
        benefit2: 'Automatikus szinkronizálás',
        benefit3: 'Exportálás TXT / CSV formátumba',
      },
      alreadyPremium: {
        text: 'Már prémium tag vagy, az alábbi előnyökkel:',
      },
      successToast: {
        title: 'Hurrá!',
        description: 'A prémium előfizetésed sikeres volt. Köszönjük a támogatást!',
      },
      errorToast: {
        title: 'Hoppá!',
        description: 'Valami elromlott. Kérlek, próbáld újra később.',
      },
      header: 'Prémium',
      text: 'Élvezd a legjobb élményt a Movesong Prémium szolgáltatással.',
      buttonText: 'Prémium előfizetés',
      monthlyButtonText: '$ 4.99 / hónap',
      yearlyButtonText: '$ 24.99 / év',
    },

    profile: {
      accountHeader: 'Fiók',
      syncHeader: 'Szinkronizálás',
      sharesHeader: 'Megosztások',
      historyHeader: 'Előzmények',
      accountTab: {
        loggedOutToast: {
          title: 'Hurrá!',
          description: 'Sikeresen kijelentkeztél.',
        },
        notPremium: 'Nem vagy prémium tag.',
        logOutButtonText: 'Kijelentkezés',
        deleteAccountButtonText: 'Fiók törlése',
        cancelSubscriptionButtonText: 'Prémium lemondása',
        logOutPopover: {
          header: 'Kijelentkezés',
          text: 'Biztos, hogy ki szeretnél jelentkezni?',
          buttonText: 'Kijelentkezés',
        },
        deleteAccountPopover: {
          header: 'Biztos vagy benne, hogy törölni szeretnéd a fiókodat?',
          text: 'Ez a művelet nem visszavonható.',
          buttonText: 'Fiók törlése',
        },
        cancelSubscriptionPopover: {
          header: 'Biztos vagy benne, hogy le szeretnéd mondani a prémium előfizetésedet?',
          text: 'A prémium előfizetésed lemondása után a prémium funkciók elvesznek.',
          buttonText: 'Prémium lemondása',
        },
        account: 'Fiók',
        premium: 'Prémium fiók',
        premiumBundle: 'Prémium csomag:',
        nextPayment: 'Következő fizetés:',
        paymentMethod: 'Fizetési mód:',
        card: 'Kártya',
        connections: 'Kapcsolatok',
        changePassword: 'Jelszó megváltoztatása',
        logout: 'Kijelentkezés',
        logoutSuccessToast: {
          title: 'Hurrá!',
          description: 'Sikeresen kijelentkeztél.',
        },
        deleteAccountSuccessToast: {
          title: 'Hurrá!',
          description: 'A fiókod sikeresen törölve.',
        },
        cancelSubscriptionSuccessToast: {
          title: 'Hurrá!',
          description: 'A prémium előfizetésed sikeresen lemondva.',
        },
        noConnections: 'Még nincs kapcsolatod.',
        newConnection: 'Új kapcsolat',
        email: 'Email:',
        changePasswordDialog: {
          header: 'Jelszó megváltoztatása',
          text: 'Kérjük, add meg a régi jelszavadat, majd a kívánt új jelszót. Kattints a mentésre, ha kész vagy.',
          oldPassword: 'Régi jelszó',
          newPassword: 'Új jelszó',
          confirmNewPassword: 'Új jelszó megerősítése',
          saveButtonText: 'Mentés',
          closeButtonText: 'Bezárás',
          successToast: {
            title: 'Hurrá!',
            description: 'A jelszavad sikeresen megváltoztatva.',
          },
        },
      },
      historyTab: {
        header: 'Előzmények',
        itemsTransformed: 'átvéve',
        newTransformButtonText: 'Új átvitel',
        noTransforms: 'Még nincsenek átvitelek.',
        shareSuccessToast: {
          title: 'Hurrá!',
          description: 'A lejátszási lista sikeresen megosztva.',
        },
      },
      sharesTab: {
        header: 'Megosztások',
        newShareButtonText: 'Új megosztás',
        sharesTable: {
          filterPlaylists: "Szűrd a lejátszási listákat...",
          actions: "Műveletek",
          copyLink: "Másold a lejátszási lista linkjét",
          share: "Megosztás",
          openOnPlatform: "Megnyitás a platformon",
          openMenu: "Menü megnyitása",
          noResults: "Nincs találat.",
          public: "Nyilvános",
          private: "Privát",
          sharedPlaylistName: "Lejátszási lista neve",
          date: "Dátum",
          views: "Megtekintések",
          selectAll: "Összes kiválasztása",
          selectRow: "Sor kiválasztása",
          visible: "Állapot",
          selected: "sor kiválasztva.",
          next: "Következő",
          previous: "Előző",
          columns: "Oszlopok",
          search: "Keresés",
          open: "Megnyitás",
          changeStatus: "Állapot módosítása",
          changeStatusToast: {
            title: 'Hurrá!',
            description: 'A megosztás állapota sikeresen módosítva.',
          },
          linkCopiedToast: {
            title: 'A hivatkozás vágólapra másolva!',
            description: 'Most már megoszthatod a linket a barátaiddal.',
          },
        }
      },
      syncsTab: {
        header: 'Szinkronizálások',
        newSyncButtonText: 'Új szinkronizálás',
        syncsTable: {
          filterPlaylists: "Szűrd a lejátszási listákat...",
          actions: "Műveletek",
          copyLink: "Másold a lejátszási lista linkjét",
          share: "Megosztás",
          openOnPlatform: "Megnyitás a platformon",
          openMenu: "Menü megnyitása",
          noResults: "Nincs találat.",
          interval: "Időköz",
          lastSyncDate: "Utolsó szinkronizálás dátuma",
          enabled: "Engedélyezve",
          disabled: "Letiltva",
          playlistName: "Lejátszási lista neve",
          date: "Dátum",
          views: "Megtekintések",
          selectAll: "Összes kiválasztása",
          selectRow: "Sor kiválasztása",
          visible: "Állapot",
          selected: "sor kiválasztva.",
          next: "Következő",
          previous: "Előző",
          columns: "Oszlopok",
          search: "Keresés",
          open: "Megnyitás",
          changeStatus: "Állapot módosítása",
          changeStatusToast: {
            title: 'Hurrá!',
            description: 'A megosztás állapota sikeresen módosítva.',
          },
          deleteToast: {
            title: 'Hurrá!',
            description: 'A szinkronizálás sikeresen törölve.',
          },
          changeIntervalToast: {
            title: 'Hurrá!',
            description: 'A szinkronizálás időköze sikeresen módosítva.',
          },
          changeInterval: 'Időköz módosítása',
          delete: 'Törlés',
          changeIntervalDialog: {
            header: 'Időköz módosítása',
            text: 'Válaszd ki az új időközt a szinkronizáláshoz. Kattints a mentésre, ha kész vagy.',
            interval: 'Időköz',
            buttonText: 'Mentés',
          },
        },
      },
      welcome: 'Üdvözöllek,',
    },

    share: {
      shareUpdatedToast: {
        title: 'Hurrá!',
        description: 'A megosztás sikeresen frissítve.',
      },
      linkCopiedToast: {
        title: 'A hivatkozás vágólapra másolva!',
        description: 'Most már megoszthatod a linket a barátaiddal.',
      },
      editShareDialog: {
        header: 'Megosztás szerkesztése',
        text: 'Itt módosíthatod a megosztott lejátszási listádat. Kattints a mentésre, ha kész vagy.',
        playlistNameLabel: 'Lejátszási lista neve',
        backgroundLabel: 'Háttérkép',
        buttonText: 'Módosítások mentése',
      },
      sharedWithYou: 'megosztott egy lejátszási listát veled.',
      openOn: 'Lejátszási lista megnyitása itt:',
      importIntoMyLibraryButtonText: 'Importálás a könyvtáramba',
    },

    transform: {
      step: 'lépés',
      sourceTab: {
        header: 'FORRÁS KIVÁLASZTÁSA',
        noConnections: 'Még nincs kapcsolatod. Kérjük, csatlakoztass egy Spotify vagy YouTube fiókot.',
      },
      playlistTab: {
        header: 'LEJÁTSZÁSI LISTA KIVÁLASZTÁSA',
      },
      destinationTab: {
        header: 'CÉL KIVÁLASZTÁSA',
      },
      summaryTab: {
        header: 'ÖSSZEFOGLALÓ',
        text: 'Lejátszási lista átvitele ',
        songs: 'dalok',
        convertButtonText: 'Átalakítás',
      },
      finish: {
        header: 'ÁTVITEL KÉSZ',
        shareMySongsButtonText: 'Dalaim megosztása',
        downloadButtonText: 'Letöltés',
        convertAgainButtonText: 'Újra átalakítás',
        copied: 'másolva',
      },
    },

    sync: {
      source: 'FORRÁS',
      destination: 'CÉL',
      interval: 'IDŐKÖZ',
      hourly: 'Óránként',
      daily: 'Naponta',
      weekly: 'Heti',
      syncSuccessfulToast: {
        title: 'Hurrá!',
        description: 'A szinkronizálás sikeresen végrehajtva.',
      },
      intervalPlaceholder: 'Válassz időközt',
      syncButtonText: 'Szinkronizálás',
    },

    termsOfService: {
      header: 'Felhasználási feltételek',
      firstHeader: '1. Feltételek',
      firstText: 'A https://www.movesong.com weboldal elérésével Ön elfogadja a jelen szolgáltatási feltételeket, az összes vonatkozó törvényt és szabályozást, és egyetért azzal, hogy Ön felelős az alkalmazandó helyi törvények betartásáért. Ha nem ért egyet ezen feltételek bármelyikével, tilos a webhely használata vagy elérése. A weboldalon található anyagok a vonatkozó szerzői jogi és védjegyjogi törvények által védettek.',
      secondHeader: '2. Használati engedély',
      secondText: 'a. Engedélyt adunk arra, hogy ideiglenesen letöltsön egy példányt a Movesong webhelyén található anyagokból (információ vagy szoftver) személyes, nem kereskedelmi célú átmeneti megtekintéshez. Ez egy licenc nyújtása, nem a tulajdon átruházása, és e licenc alapján Ön nem:<br/>' +
        '- módosíthatja vagy másolhatja az anyagokat;<br/>' +
        '- használhatja az anyagokat bármilyen kereskedelmi célra vagy nyilvános megjelenítéshez (kereskedelmi vagy nem kereskedelmi célú);<br/>' +
        '- megkísérelheti a Movesong webhelyén található bármely szoftver visszafejtését vagy visszafordítását;<br/>' +
        '- eltávolíthatja az anyagokon található szerzői jogi vagy más tulajdonosi jelöléseket; vagy<br/>' +
        '- átruházhatja az anyagokat más személynek, vagy "tükrözheti" az anyagokat bármely más szerveren.<br/>' +
        '- Ez a szolgáltatás nem használható harmadik fél weboldal fejlesztéséhez.<br/>' +
        '- A https://www.movesong.com összes tartalma szerzői jogvédelem alatt áll, és a https://www.movesong.com tulajdona.<br/>' +
        'b. Ez a licenc automatikusan megszűnik, ha megsérti e korlátozások bármelyikét, és a Movesong bármikor megszüntetheti azt. A licenc megszűnésekor vagy a megtekintési jog megszüntetésekor Ön köteles minden letöltött anyagot megsemmisíteni, legyen az elektronikus vagy nyomtatott formátumban.',
      thirdHeader: '3. Felelősség kizárása',
      thirdText: 'a. A Movesong webhelyén található anyagokat "ahogy van" alapon nyújtjuk. A Movesong nem vállal semmilyen kifejezett vagy hallgatólagos garanciát, és ezennel kizár minden egyéb garanciát, ideértve, de nem kizárólagosan, a forgalomképességre, meghatározott célra való alkalmasságra, illetve a szellemi tulajdonjogok megsértésére vonatkozó hallgatólagos garanciákat vagy egyéb jogsértésekre vonatkozó felelősséget.<br/>' +
        '<br/>' +
        'b. Továbbá a Movesong nem vállal semmilyen garanciát az anyagok pontosságával, várható eredményeivel vagy megbízhatóságával kapcsolatban a webhelyén található anyagok használatával, vagy a webhelyhez kapcsolódó anyagokkal kapcsolatban.',
      fourthHeader: '4. Korlátozások',
      fourthText: 'A Movesong vagy annak beszállítói semmilyen esetben nem felelnek semmilyen kárért (beleértve, korlátozás nélkül, az adatvesztésért vagy profitveszteségért, vagy üzleti tevékenység megszakításáért) a Movesong webhelyén található anyagok használatából vagy azok használatának képtelenségéből adódóan, még akkor sem, ha a Movesong vagy egy Movesong által meghatalmazott képviselő szóban vagy írásban értesítést kapott az ilyen károk lehetőségéről. Mivel egyes joghatóságok nem engedélyezik a hallgatólagos garanciák korlátozását vagy a felelősség korlátozását következményes vagy járulékos károkért, ezek a korlátozások Önre nem vonatkozhatnak.',
      fifthHeader: '5. Anyagok pontossága',
      fifthText: 'A Movesong webhelyén megjelenő anyagok technikai, tipográfiai vagy fényképészeti hibákat tartalmazhatnak. A Movesong nem vállal garanciát arra, hogy a webhelyén található anyagok pontosak, teljesek vagy naprakészek. A Movesong bármikor módosíthatja a webhelyén található anyagokat értesítés nélkül. Azonban a Movesong nem vállal semmilyen kötelezettséget az anyagok frissítésére.',
      sixthHeader: '6. Hivatkozások',
      sixthText: 'A Movesong nem vizsgálta felül az összes hivatkozott webhelyet, és nem felelős azok tartalmáért. Bármely hivatkozás beillesztése nem jelenti a Movesong általi jóváhagyást az adott webhelyen. Az ilyen hivatkozott webhely használata a felhasználó saját felelősségére történik.<br/>' +
        '<br/>' +
        'Weboldalunk részt vesz az Amazon Affiliate Programban és az Apple Music Affiliate Programban. Ezen affiliate programok résztvevőjeként az oldalunkon keresztül történő vásárlásokból származó jutalékot keresünk.',
      seventhHeader: '7. Módosítások',
      seventhText: 'A Movesong bármikor felülvizsgálhatja ezen webhely szolgáltatási feltételeit előzetes értesítés nélkül. A weboldal használatával Ön elfogadja, hogy a mindenkor hatályos szolgáltatási feltételek kötelezik.',
      eighthHeader: '8. Harmadik fél platform',
      eighthText: 'Ez a szolgáltatás semmilyen módon nincs kapcsolatban a YouTube, YouTube Music, Spotify, Google Play Music, Apple Music, Amazon Music, Deezer, last.fm, KKBOX, Pandora, Tidal, SoundCloud szolgáltatásokkal.',
      ninthHeader: '9. Harmadik fél szolgáltatási feltételei',
      ninthText: 'YouTube - A Movesong használatával Ön elfogadja a YouTube Szolgáltatási feltételeit. A Movesong a YouTube API Szolgáltatásokat használja. Kérjük, tekintse meg a Google Adatvédelmi Irányelveit is. A Movesong a YouTube felhasználói adatokat arra használja, hogy hozzáférést biztosítson és megjelenítse a YouTube adatait a Movesongon. A Movesong hozzáférhet a felhasználó YouTube-felhasználónevéhez, privát lejátszási listáihoz, kedvelt videóihoz, feltöltött videóihoz és feliratkozott csatornáihoz. A felhasználói adatok kizárólag a Movesong szolgáltatásainak biztosítása érdekében kerülnek felhasználásra, és nem kerülnek megosztásra semmilyen külső szolgáltatással. Ön bármikor visszavonhatja a Movesong hozzáférését az adataihoz a Google biztonsági beállítások oldalán, valamint kapcsolatba léphet a Movesonggal bármilyen kérdéssel vagy panasszal itt.<br/>' +
        '<br/>' +
        'Spotify - A Movesong használatával Ön elfogadja a Spotify Használati feltételeit. A Movesong a Spotify API Szolgáltatásokat használja. A Movesong a Spotify felhasználói adatokat arra használja, hogy hozzáférést biztosítson és megjelenítse a Spotify adatait a Movesongon. A Movesong hozzáférhet a felhasználó Spotify-felhasználónevéhez, privát lejátszási listáihoz, kedvelt dalaihoz, kedvelt albumaihoz és kedvelt előadóihoz. A felhasználói adatok kizárólag a Movesong szolgáltatásainak biztosítása érdekében kerülnek felhasználásra, és nem kerülnek megosztásra semmilyen külső szolgáltatással. Ön bármikor visszavonhatja a Movesong hozzáférését az adataihoz a Spotify fiókbeállításainál, valamint kapcsolatba léphet a Movesonggal bármilyen kérdéssel vagy panasszal itt.',
    },

    privacyPolicy: {
      header: 'Adatvédelmi irányelvek',
      text: 'Az Ön adatainak védelme fontos számunkra. A Movesong célja, hogy tiszteletben tartsa az Ön magánéletét minden olyan információval kapcsolatban, amelyet gyűjthetünk Öntől a weboldalunkon, https://www.movesong.com.<br/>' +
        '<br/>' +
        'Nem gyűjtünk semmilyen személyes adatot. Csak akkor kérünk információt, ha valóban szükség van rá a szolgáltatás nyújtásához. Tisztességes és törvényes módon gyűjtjük az információkat az Ön tudtával és beleegyezésével. Azt is tudatjuk Önnel, miért gyűjtjük ezeket, és hogyan használjuk fel azokat.<br/>' +
        '<br/>' +
        'Annak érdekében, hogy javítsuk az Ön felhasználói élményét a webhelyünkön, úgynevezett "sütiket" használhatunk. A sütik iparági szabványok, és a legtöbb nagy webhely is használja ezeket. A süti egy kis szöveges fájl, amelyet a webhelyünk elhelyezhet az Ön számítógépén, hogy megjegyezze az Ön preferenciáit. A böngésző megfelelő beállításainak kiválasztásával elutasíthatja a sütik használatát, de kérjük, vegye figyelembe, hogy ebben az esetben előfordulhat, hogy nem tudja teljes mértékben használni a weboldal összes funkcióját.<br/>' +
        '<br/>' +
        'A Movesong Google API-kból származó információk felhasználása és továbbítása más alkalmazások felé a Google API Szolgáltatások felhasználói adatvédelmi irányelveinek, beleértve a korlátozott felhasználási követelményeket is, megfelelően történik.<br/>' +
        '<br/>' +
        'A Movesong a YouTube API Szolgáltatásokat használja. Kérjük, tekintse meg a Google Adatvédelmi Irányelveket is. A Movesong a YouTube felhasználói adatokat arra használja, hogy hozzáférést biztosítson és megjelenítse a YouTube adatait a Movesongon. A Movesong hozzáférhet a felhasználó YouTube-felhasználónevéhez, privát lejátszási listáihoz, kedvelt videóihoz, feltöltött videóihoz és feliratkozott csatornáihoz. A felhasználói adatok kizárólag a Movesong szolgáltatásainak biztosítása érdekében kerülnek felhasználásra, és nem kerülnek megosztásra semmilyen külső szolgáltatással. Ön bármikor visszavonhatja a Movesong hozzáférését az adataihoz a Google biztonsági beállítások oldalán, valamint kapcsolatba léphet a Movesonggal bármilyen kérdéssel vagy panasszal itt.<br/>' +
        '<br/>' +
        'A Movesong a Spotify API Szolgáltatásokat is használja. Kérjük, tekintse meg a Spotify Adatvédelmi Irányelveket is. A Movesong a Spotify felhasználói adatokat arra használja, hogy hozzáférést biztosítson és megjelenítse a Spotify adatait a Movesongon. A Movesong hozzáférhet a felhasználó Spotify-felhasználónevéhez, privát lejátszási listáihoz, kedvelt dalaihoz, kedvelt albumaihoz és kedvelt előadóihoz. A felhasználói adatok kizárólag a Movesong szolgáltatásainak biztosítása érdekében kerülnek felhasználásra, és nem kerülnek megosztásra semmilyen külső szolgáltatással. Ön bármikor visszavonhatja a Movesong hozzáférését az adataihoz a Spotify Alkalmazások oldalán, amelyek hozzáférnek az Ön Spotify-információihoz, valamint kapcsolatba léphet a Movesonggal bármilyen kérdéssel vagy panasszal itt.<br/>' +
        '<br/>' +
        'Az általunk gyűjtött adatokat csak addig őrizzük meg, amíg szükséges az Ön által kért szolgáltatás biztosításához. Az általunk tárolt adatokat kereskedelmi szempontból elfogadható módszerekkel védjük, hogy megakadályozzuk az adatvesztést, lopást, valamint az illetéktelen hozzáférést, nyilvánosságra hozatalt, másolást, felhasználást vagy módosítást.<br/>' +
        '<br/>' +
        'Nem osztunk meg semmilyen személyazonosításra alkalmas információt nyilvánosan vagy harmadik felekkel, kivéve, ha ezt törvény írja elő.<br/>' +
        '<br/>' +
        'Webhelyünk külső oldalakra mutató hivatkozásokat tartalmazhat, amelyeket nem mi üzemeltetünk. Kérjük, vegye figyelembe, hogy nincs befolyásunk ezen oldalak tartalmára és gyakorlataira, és nem vállalunk felelősséget vagy kötelezettséget ezek adatvédelmi irányelveiért.<br/>' +
        '<br/>' +
        'Ön szabadon megtagadhatja a személyes adatok megadására irányuló kérésünket, azzal a megértéssel, hogy előfordulhat, hogy nem tudunk biztosítani bizonyos kívánt szolgáltatásokat.<br/>' +
        '<br/>' +
        'A webhelyünk folytatólagos használata az adatvédelmi és személyes adatokkal kapcsolatos gyakorlataink elfogadásának minősül. Ha bármilyen kérdése van azzal kapcsolatban, hogyan kezeljük a felhasználói adatokat és személyes információkat, nyugodtan lépjen kapcsolatba velünk.',
    },
  },
};
