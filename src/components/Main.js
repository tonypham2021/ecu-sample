import React from 'react';
import { useReducer } from 'react';
import './fontawesome-free-5.15.2-web/css/all.css'

function Main() {
    const [adminRights, toggleAdminRights] = useReducer((adminRights) => !adminRights, false);
    const [sharepointAccess, toggleSharepointAccess] = useReducer((sharepointAccess) => !sharepointAccess, false);
    const [collabAccess, toggleCollabAccess] = useReducer((collabAccess) => !collabAccess, false);
    return(
        <main>
        <h2>Getting Started</h2>
        <p>Below you will find a checklist of things to do during your first week.</p>
          <input type="checkbox" name="admin-rights" value={adminRights} onChange={toggleAdminRights}/>
          <label htmlFor="admin-rights"> Confirm that you have admin rights on your PC.</label><br/>
          <input type="checkbox" name="sharepoint-access" value={sharepointAccess} onChange={toggleSharepointAccess}/>
          <label htmlFor="sharepoint-access"> Confirm that you have access to <a href="https://135gc.sharepoint.com/sites/ext/pspam-sppca/dgdpi-ciob/tse-sbt/uce-ecu">Sharepoint</a>.
          </label><br/>
          <input type="checkbox" name="collab-inbox" value={collabAccess} onChange={toggleCollabAccess}/>
          <label htmlFor="collab-inbox"> Confirm that you have access to the collab inbox in Outlook.</label>
          <p>I {adminRights ? "have" : "do not have"} admin rights.</p>
          <p>I {sharepointAccess ? "have" : "do not have "} access to SharePoint.</p>
          <p>I {collabAccess ? "have" : "do not have"} access to the collab inbox in Outlook.</p>
          <p>{
              (adminRights && sharepointAccess && collabAccess) ? <React.Fragment><i className="fas fa-check-square"></i> Looks like you're all set!</React.Fragment> : ""
            }</p>
          <h2>Useful links</h2>
          <p>Here are some handy links to check out to get yourself acquainted with the team.</p>
          <ul>
            <li><a href="https://135gc.sharepoint.com/sites/collab" target="_blank" rel="noopener noreferrer">Learning Portal</a></li>
            <li><a href="https://135gc.sharepoint.com/sites/ext/pspam-sppca/dgdpi-ciob/tse-sbt/uce-ecu" target="_blank" rel="noopener noreferrer">ECU Home Page</a></li>
            <li><a href="http://digital-workspace.pch.gc.ca/ux/myitapp/" target="_blank" rel="noopener noreferrer">PCH Service Desk</a></li>
          </ul>
      </main>
    );
}

export default Main;