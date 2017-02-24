function Certificates() {

    //Certificates
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 60, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Certificates", root);
        tutorialList.child[0].child[3].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[3].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[3].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Two Tier PKI Hierarchy
            new HierarchicalUnit(tutorialList.child[0].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Two Tier PKI Hierarchy", root);
            
                    //CAPolicy.inf
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "CAPolicy.inf", "Certificates/TwoTierPkiHierarchy/CaPolicy");

                    //Standalone Root CA Installation
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[1].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Standalone Root CA Installation", "Certificates/TwoTierPkiHierarchy/StandaloneRootCaInstallation");

                    //Enterprise Subordinate CA Installation
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[1].child[3], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Enterprise Subordinate CA Installation", "Certificates/TwoTierPkiHierarchy/EnterpriseSubordinateCaInstallation");

                    //Copy CRL and AIA from Root CA
                    new HierarchicalUnit(tutorialList.child[0].child[3].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[3].child[1].child[4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Copy CRL and AIA from Root CA", "Certificates/TwoTierPkiHierarchy/CopyCrlAndAiaFromRootCa");

































}