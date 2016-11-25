function DNS() {

    //DNS
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 20, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DNS", root);
        tutorialList.child[0].child[1].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[1].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[1].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Installing DNS
            new HierarchicalUnit(tutorialList.child[0].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Installing DNS", root);
            
                    //Adding DNS Services
                    new HierarchicalUnit(tutorialList.child[0].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[1].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Adding DNS Services", "ActiveDirectory/InstallingActiveDirectory/AddingActiveDirectoryDomainServices");

            
}