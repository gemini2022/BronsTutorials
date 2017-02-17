function Certificates() {

    //Certificates
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 60, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Certificates", root);
        tutorialList.child[0].child[3].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[3].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[3].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Enterprise
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Enterprise", root);
            
                    //Root CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Root CA", "Certificates/Enterprise/RootCA");

            //Stand-Alone
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Stand-Alone", root);
            
                    //Root CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Root CA", "Certificates/StandAlone/RootCA");



































}