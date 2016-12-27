function DHCP() {

    //DHCP
    new HierarchicalUnit(tutorialList.child[0], [0, 0, 0, 0, 0, 0, 0, 40, 0, 0], root);
        new ExpandCollapse(tutorialList.child[0].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "DHCP", root);
        tutorialList.child[0].child[2].child[0].child[1].font.size = 14;
        tutorialList.child[0].child[2].child[0].child[1].font.style = FontStyle.Bold;
        tutorialList.child[0].child[2].child[0].child[1].baseline = LabelBaseline.Bottom;

            //Installing DHCP
            new HierarchicalUnit(tutorialList.child[0].child[2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                new ExpandCollapse(tutorialList.child[0].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Installing DHCP", root);
            
                    //Adding DHCP Server Role
                    new HierarchicalUnit(tutorialList.child[0].child[2].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], root);
                        new Link(tutorialList.child[0].child[2].child[1].child[1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Adding DHCP Server Role", "DHCP/InstallingDHCP/AddingDhcpServerRole");

            
}