import { New, User } from '@codee-club/common/dist/dao'

import getGuid from '~/get-guid'

const IDS = {
  charles: 'charles',
  antony: 'antony',
  arya: 'arya-stark',
  sansa: 'sansa-stark',
  pet: 'pet',
  best: 'best',
  aobaom: 'aobaom',
  mew: 'mew'
}

const teachers: Array<New<User> & { id: string, email: string }> = [
  { id: IDS.charles, email: 'charlesa@nu.ac.th', nameFirst: 'Charles', nameLast: 'Allen', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Fcharles-allen.jpg?alt=media&token=747ecdbe-f11d-4b16-a9f0-396e75f04205', bio: 'Experience is making mistakes and learning from them', links: { github: 'https://github.com/charles-allen', linkedin: 'https://www.linkedin.com/in/ajahncharles' }, followingIds: [IDS.antony, IDS.arya], followerIds: [IDS.antony, IDS.arya, IDS.sansa, IDS.pet, IDS.best, IDS.aobaom, IDS.mew], roles: ['contributor', 'creator'] },
  { id: IDS.antony, email: 'antonyh@nu.ac.th', nameFirst: 'Antony', nameLast: 'Harfield', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Fantony-harfield.jpg?alt=media&token=93c4b619-bece-443b-a0dd-9e7dc8ec0c41', bio: 'Potato-tomato; Tomato-potato', followingIds: [IDS.charles, IDS.arya], followerIds: [IDS.charles], roles: ['contributor', 'creator'] },
  { id: getGuid(), email: 'jaratsrir@nu.ac.th', nameFirst: 'Jaratsri', nameLast: 'Rungratanaubol' },
  { id: getGuid(), email: 'wuttipongr@nu.ac.th', nameFirst: 'Wuttipong', nameLast: 'Ruanthong' },
  { id: getGuid(), email: 'nattaponk@nu.ac.th', nameFirst: 'Nattapon', nameLast: 'Kumyaito' }
]

const students: Array<New<User> & { id: string, email: string, sectionCode: string }> = [
  { id: getGuid(), email: 'bob@nu.ac.th', sectionCode: '1', nameFirst: 'Bob', nameLast: 'Bobbins' },
  { id: IDS.arya, email: 'arya@codee.club', sectionCode: '1', nameFirst: 'Arya', nameLast: 'Stark', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Farya-stark.jpg?alt=media&token=57601e08-f059-49d9-9c59-97eefe867412', bio: 'Valar Morghulis', links: { github: 'https://github.com/Aryaa-Stark' }, followingIds: [IDS.charles, IDS.sansa], followerIds: [IDS.charles, IDS.antony, IDS.sansa, IDS.pet, IDS.best, IDS.aobaom, IDS.mew] },
  { id: IDS.sansa, email: 'sansa@codee.club', sectionCode: '2', nameFirst: 'Sansa', nameLast: 'Stark', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Fsansa-stark.jpg?alt=media&token=56a8500d-51c5-4474-b08b-8bf7906cd760', bio: 'Lady of Winterfell; Queen in the North', followingIds: [IDS.charles, IDS.arya], followerIds: [IDS.arya] },
  { id: IDS.pet, email: 'baramec62@nu.ac.th', sectionCode: '3', nameFirst: 'Barame', nameLast: 'Chaiho', code: '62313016', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Fbarame-chaiho.jpg?alt=media&token=55ca8063-780b-4ae2-9dff-69cc5df8ac26', followingIds: [IDS.charles, IDS.arya], followerIds: [], roles: ['contributor'] },
  { id: IDS.best, email: 'aticholl62@nu.ac.th', sectionCode: '4', nameFirst: 'Atichol', nameLast: 'Leejinda', code: '62315935', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Fatichol-leejinda.jpg?alt=media&token=55a22816-2841-4487-ae90-69fc7663f007', followingIds: [IDS.charles, IDS.arya], followerIds: [], roles: ['contributor'] },
  { id: IDS.aobaom, email: 'sunisad63@nu.ac.th', sectionCode: '5', nameFirst: 'Sunisa', nameLast: 'Duangtham', code: '63314975', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Fsunisa-duangtham.jpg?alt=media&token=12b579c0-4c80-4dfd-81dc-91107ae4e81d', followingIds: [IDS.charles, IDS.arya, IDS.mew], followerIds: [IDS.mew], roles: ['contributor'] },
  { id: IDS.mew, email: 'suwichadap63@nu.ac.th', sectionCode: '6', nameFirst: 'Suwichada', nameLast: 'Phromma', code: '63315125', avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/codee-club-emu.appspot.com/o/profiles%2Favatars%2Fsuwichada-phromma.jpg?alt=media&token=b819260e-a751-48a1-bd20-cf8afc18a3ea', followingIds: [IDS.charles, IDS.arya, IDS.aobaom], followerIds: [IDS.aobaom], roles: ['contributor'] }
]

const testStudentEmails = new Set([
  'arya@codee.club',
  'sansa@codee.club',
  'baramec62@nu.ac.th',
  'aticholl62@nu.ac.th',
  'sunisad63@nu.ac.th',
  'suwichadap63@nu.ac.th'
])

export const keyedTeachers: Array<{ id: string, email: string, data: New<User> }> = teachers.map(({ id, email, ...data }) => ({ id, email, data }))
export const keyedStudents: Array<{ id: string, data: New<User>, email: string, sectionCode: string }> = students.map(({ id, email, sectionCode, ...data }) => ({ id, email, sectionCode, data }))
export const keyedTestStudents = keyedStudents.filter(s => testStudentEmails.has(s.email))
