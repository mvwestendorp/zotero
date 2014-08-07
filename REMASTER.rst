===================
Multilingual Zotero
===================
----------------------
Patches for Zotero 5.0
----------------------

############
Introduction
############

Big changes are in store for the Zotero sync infrastructure (and much else). As Dan Stillman writes on `zotero-dev`:

    Due to our necessary migration to asynchronous database access in the
    Zotero client, the next major version — now tentatively called 5.0 due
    to the scope of code changes — will unfortunately require changes to
    nearly all code that interacts with the JS API. See
    https://github.com/zotero/zotero/issues/518 for the full details, and
    post there with any questions. (To address a likely one: we don't yet
    have an estimate for when this version will be released.)

    The API changes could still evolve, and I'll post to this list regarding
    necessary steps with plenty of warning, but if you're a core code
    contributor, plugin author, or happen to maintain a fork of Zotero (in
    which case I'm so, so sorry), I'd recommend subscribing to that thread
    to follow the discussion there. 

The "sorry" there is directed at MLZ. As the issue thread to which Dan
links explains, the move to Zotero 5.0 will involve a rebase of the
Zotero master branch. This will require manual application of the
entire family of MLZ patches to the new Zotero source. In this note,
I will be trying to get my head around the procedures for doing so.

The process is made worse by the fact that I have been very (very) lax
in my housekeeping of the MLZ changeset. There are many small changes
that make sense only in combination, and many changes with multiple
purposes. This is going to hurt, but it is also an opportunity to get
a branch in place that is more transparent, and that has a better
prospect of eventual review by the core Zotero team.

We live in hope.

#################################
Diagnosis: doing a file inventory
#################################

A file-by-file inventory of existing changes would help me to gauge the
scale of the problem. Although the MLZ diff is massive, much of the bulk
is due to stand-alone data files. A diff against the current 4.0 branch
would show how many files actually require merging, and an examination
of each would reveal: (1) to which features the changes in each belong; and
\(2) how fragile the changes in each are likely to be.

We can assume that a significant amount of the core MLZ code for
sync and for multilingual support will need to be rewritten entirely
to conform to the new model. An inventory will give some idea of how heavy
the burden will be there as well.

Here's the initial result of a diff survey:

=========     ======   =========
**ext**       **no**   **merge**
=========     ======   =========
locale        317      0
js            59       47
xul           23       16
css           10       10
py            6        0
sql           5        3
xml           4        4
tmpl          4        0
txt           1        0
svg           2        0
rdf           2        0
json          1        0
sh            1        0
html          1        1
rst           1        0
**Total**     437      81
=========     ======   =========

That's daunting, but better than being stuck in the eye with a carrot.
The next thing will be to check the individual patches, and see how
many involve significant complexity.
