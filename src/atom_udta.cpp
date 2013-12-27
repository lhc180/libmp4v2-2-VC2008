/*
 * The contents of this file are subject to the Mozilla Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is MPEG4IP.
 *
 * The Initial Developer of the Original Code is Cisco Systems Inc.
 * Portions created by Cisco Systems Inc. are
 * Copyright (C) Cisco Systems Inc. 2001.  All Rights Reserved.
 *
 * Contributor(s):
 *      Dave Mackie     dmackie@cisco.com
 */

#include "src/impl.h"

namespace mp4v2 {
namespace impl {

///////////////////////////////////////////////////////////////////////////////

MP4UdtaAtom::MP4UdtaAtom(MP4File &file)
        : MP4Atom(file, "udta")
{
    ExpectChildAtom("chpl", Optional, OnlyOne);
    ExpectChildAtom("cprt", Optional, Many);
    ExpectChildAtom("hnti", Optional, OnlyOne);
    ExpectChildAtom("meta", Optional, OnlyOne);
    ExpectChildAtom("\251cpy", Optional, OnlyOne);
    ExpectChildAtom("\251des", Optional, OnlyOne);
    ExpectChildAtom("\251nam", Optional, OnlyOne);
    ExpectChildAtom("\251cmt", Optional, OnlyOne);
    ExpectChildAtom("\251prd", Optional, OnlyOne);
}

void MP4UdtaAtom::Read()
{
    if (ATOMID(m_pParentAtom->GetType()) == ATOMID("trak")) {
        ExpectChildAtom("hinf", Optional, OnlyOne);
        ExpectChildAtom("name", Optional, OnlyOne);
    }

    MP4Atom::Read();
}

///////////////////////////////////////////////////////////////////////////////

}
} // namespace mp4v2::impl
