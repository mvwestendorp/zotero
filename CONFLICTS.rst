==================
Juris-M and Zotero
==================

With extension signing coming soon to Firefox, and MLZ on the verge of
the Juris-M rebranding, this is a good time to think about how to be a
better neighbour to Zotero.

Juris-M (JM aka MLZ) is a drop-in replacement for Zotero for Firefox
(ZF).  As such, it should yield when ZF is installed and
enabled. How to make that happen is the puzzle of the moment.

--------------------------
An approach that will work
--------------------------

If the install ID, contractIDs and classIDs of Juris-M are aligned
with Zotero, but Juris-M is set up to clone the Zotero DB (if one
exists) rather than modifying it in place, we get what we're after:

1. Only one of Zotero or Juris-M can be installed in a single Firefox profile; and
2. User data is not affected when either is installed over the other.

Completely overwriting the Zotero extension at first seems an unfriendly
approach, but with the clone of the DB, it seems the best way of
dovetailing the two systems. If agreement and approvals can be arranged ...

------------------------------
An approach that will not work
------------------------------

I begin with the idea of giving Juris-M its own installer ID.
This did not have a happy ending ...

    The problem is greatly simplified by the fact that both JM and ZF are
    "restartful." While is to not possible to prevent the installation of
    both plugins in a single instance of Firefox, installs do not take
    effect immediately, and the conflict can be known at system startup.
    It should be possible to assure that JM, as the "junior partner" in
    the relationship, "sleeps" when Zotero is installed and enabled.
    
    There are four possible scenarios:
    
    1. JM only installed and enabled (no problem)
    2. ZF only installed and enabled (ditto)
    3. JM enabled, then ZF installed, followed by restart.
    4. ZF enabled, then JM installed, followed by restart.
    5. ZF enabled, JM sleeping, then ZF removed or disabled, followed by restart.
    6. ZF enabled, JM sleeping, then JM removed or disabled, followed by restart.
    
    States 1 & 2 are no problem, of course; the extensions just do their thing as usual.
    
    For states 3 & 4, a ZF-detection function can be run immediately on JM install,
    and in an observer triggered by extension install/uninstall and enable/disable.
    The function would set a flag in JM preferences to indicate whether ZF is known
    to be present.
    
    For states 5 & 6, the JM preference flag can be read at startup to put JM
    in sleeper mode. When sleeping, the only JM functionality that runs is the
    ZF-detection observer. If ZF is removed from the system, the JM preference
    is unset, and on restart JM will come up in state 1.
    
    Should work. :-)

In fact, that did not work out well at all. When only the installer ID is
changed in Juris-M, the clash of classIDs in the second of the two to hit
the Extension Manager to barf: the first-loaded extension is destroyed, and
the second fails to load. What the user sees is ... nothing. Both extensions
appear in the Add-Ons, but neither produces any UI. Very bad.

If the classIDs for Juris-M are made unique, we just get errors in the JavaScript
itself - which makes sense, since both Zotero and Juris-M are writing into the
same namespace.

Taking this further will just lead further down the rabbit-hole.
